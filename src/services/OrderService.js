//import { apiClient } from "@/settings.js";

export default {
  getOrders() {
    // return apiClient.get("orders");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              productId: 1,
              statusId: 1,
              count: 300,
            },
            {
              id: 2,
              productId: 2,
              statusId: 2,
              count: 200,
            },
            {
              id: 3,
              productId: 3,
              statusId: 3,
              count: 100,
            },
          ],
        });
      }, 300);
    });
  },
  addOrder(order) {
    // return apiClient.post("orders/add", order );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: 1,
            productId: order.productId,
            statusId: 1,
            count: order.count,
          },
        });
      }, 300);
    });
  },
  deleteOrder(id) {
    //return apiClient.post("orders/delete/"+id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: id,
            productId: 3,
            statusId: 1,
            count: 300,
          },
        });
      }, 300);
    });
  },
  update(order) {
    //return apiClient.post("order/update", order);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: order.id,
            productId: order.productId,
            statusId: order.statusId,
            count: order.count,
          },
        });
      }, 300);
    });
  },
};
