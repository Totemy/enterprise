<template>
  <DefaultModal @close-modal="closeModal">
    <div>
      <div class="form-group col">
        <button class="btn btn-primary" @click.prevent="submit">
          Да
        </button>
        <button class="btn btn-primary" @click.prevent="closeModal">Нет</button>
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
      order: null,
    };
  },
  props: {
    id: Number,
  },
  methods: {
    submit() {
      OrderService.deleteOrder().then(() => {
        this.$emit("get-order");
        this.closeModal();
        alert("Удалено!");
      });
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
