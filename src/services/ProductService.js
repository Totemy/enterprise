//import { apiClient } from "@/settings.js";

export default {
  getProducts() {
    // return apiClient.get("products");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              name: "Iphone 13 max",
              price: 1300,
              photoUrl:
                "https://www.notebookcheck-ru.com/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg",
            },
            {
              id: 2,
              name: "Iphone 12 pro  ",
              price: 1500,
              photoUrl:
                "https://www.notebookcheck-ru.com/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg",
            },
            {
              id: 3,
              name: "Iphone 13 ",
              price: 1800,
              photoUrl:
                "https://www.notebookcheck-ru.com/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg",
            },
          ],
        });
      }, 300);
    });
  },
};
