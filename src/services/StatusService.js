//import { apiClient } from "@/settings.js";

export default {
  getStatuses() {
    // return apiClient.get("statuses");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              name: "Подтвеждён",
            },
            {
              id: 2,
              name: "Подтвеждён",
            },
            {
              id: 3,
              name: "Подтвеждён",
            },
          ],
        });
      }, 300);
    });
  },
};
