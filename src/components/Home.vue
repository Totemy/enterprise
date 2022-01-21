<template>
  <div>
    <div class="container">
      <div v-for="(item, index) in items" :key="index" class="row box-product">
        <div class="col-2">
          <img :src="item.product.photoUrl" />
        </div>
        <div class="col-auto">
          <div>
            <h2>{{ item.product.name }}</h2>
            <h3>{{ item.status.name }}</h3>
          </div>
          <div class="row">
            <div class="col">
              Цена :
              <input
                type="number"
                v-if="editMode && editedItemId == item.order.id"
                v-model="editedPrice"
              />
              <p v-else>
                {{ item.product.price }}
              </p>
              <div>
                Количество:
                <input
                  type="number"
                  v-if="editMode && editedItemId == item.order.id"
                  v-model="editedCount"
                />
                <p v-else>
                  {{ item.order.count }}
                </p>
              </div>
              <div>Сумма: {{ item.order.count * item.product.price }}</div>
            </div>
            <div class="col">
              <div>
                <button
                  class="btn btn-primary"
                  v-if="
                    !editMode || (editMode && editedItemId != item.order.id)
                  "
                  @click="setEditMode(item)"
                >
                  Изменить
                </button>
                <div v-else>
                  <button @click="setViewMode(item)" class="btn btn-primary">
                    Save
                  </button>
                  <button @click="cancelEditMode()" class="btn btn-primary">
                    Cencel
                  </button>
                </div>
              </div>

              <button
                class="btn btn-primary"
                @click.prevent="showDelApp(item.order.id)"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="showApp">
        Добавить заказ
      </button>
      <div v-if="isShowApp">
        <OrderAppModal @close-modal="closeApp" @get-order="getCreatedOrder" />
      </div>
      <div v-if="isShowDelApp">
        <DeleteOrderModal
          @close-modal="closeDelApp"
          @get-order="deleteOrder"
          :id="selectedDeleteId"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductService from "@/services/ProductService.js";
import OrderService from "@/services/OrderService.js";
import StatusService from "@/services/StatusService.js";
import OrderAppModal from "@/components/modals/OrderAppModal.vue";
import DeleteOrderModal from "@/components/modals/DeleteOrderModal.vue";
export default {
  components: {
    OrderAppModal,
    DeleteOrderModal,
  },
  props: ["value"],
  data() {
    return {
      items: [],
      products: [],
      orders: [],
      statuses: [],
      isShowApp: false,
      isShowDelApp: false,
      selectedDeleteId: null,
      editMode: false,
      editedItemId: null,
      editedPrice: null,
      editedCount: null,
    };
  },
  methods: {
    pushItem(order) {
      let prod = this.products.find((pr) => pr.id == order.productId);
      let stat = this.statuses.find((st) => st.id == order.statusId);
      this.items.push({
        order: order,
        product: prod,
        status: stat,
      });
    },
    mapItems() {
      this.orders.forEach((el) => {
        this.pushItem(el);
      });
    },
    getCreatedOrder(order) {
      this.pushItem(order);
    },
    closeApp() {
      this.isShowApp = false;
    },
    showApp() {
      this.isShowApp = true;
    },
    showDelApp(id) {
      this.isShowDelApp = true;
      this.selectedDeleteId = id;
    },
    deleteOrder() {
      var self = this;
      var index = this.items.findIndex(function(o) {
        return o.order.id === self.selectedDeleteId;
      });
      if (index !== -1) this.items.splice(index, 1);
    },
    closeDelApp() {
      this.isShowDelApp = false;
    },
    updateOrder(order) {
      this.pushItem(order);
    },
    setEditMode(item) {
      this.editedPrice = item.product.price;
      this.editedCount = item.order.count;
      this.editMode = true;
      this.editedItemId = item.order.id;
    },
    setViewMode(item) {
      item.product.price = this.editedPrice;
      item.order.count = this.editedCount;
      this.editMode = false;
      this.editedItemId = null;
      this.editedPrice = null;
      this.editedCount = null;
    },
    cancelEditMode() {
      this.editMode = false;
      this.editedItemId = null;
    },
  },
  created() {
    ProductService.getProducts().then((resp) => {
      this.products = resp.data;
      OrderService.getOrders().then((resp) => {
        this.orders = resp.data;
        StatusService.getStatuses().then((resp) => {
          this.statuses = resp.data;
          this.mapItems();
        });
      });
    });
  },
  watch: {
    value: function() {
      this.valueLocal = this.value;
    },
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
