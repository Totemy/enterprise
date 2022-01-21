<template>
  <div class="modal d-block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click.prevent="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
