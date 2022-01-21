<template>
  <DefaultModal @close-modal="closeModal">
    <div>
      <div class="form-group col">
        <label>Id продукта</label>
        <input type="number" v-model="productId" />
      </div>
      <div class="form-group col">
        <label>Количество</label>
        <input type="number" v-model="count" />
      </div>
      <div class="form-group col">
        <button class="btn btn-primary" @click.prevent="submit">
          Добавить
        </button>
      </div>
    </div>
  </DefaultModal>
</template>
<script>
import DefaultModal from "@/components/modals/DefaultModal.vue";
import OrderService from "@/services/OrderService.js";
export default {
  components: {
    DefaultModal,
  },
  data() {
    return {
      count: null,
      productId: null,
      order: null,
    };
  },

  methods: {
    submit() {
      OrderService.addOrder({
        count: this.count,
        productId: this.productId,
      }).then((resp) => {
        this.order = resp.data;
        this.$emit("get-order", this.order);
        this.closeModal();
        alert("Добавлено!");
      });
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
