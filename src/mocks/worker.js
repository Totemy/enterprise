export const startWorker = function () {

        const { worker } = require("@/mocks/browser.js");
        worker.start({
            //onUnhandledRequest: "bypass"
        });
};