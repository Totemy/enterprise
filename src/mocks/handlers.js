import phoneServiceMock from "@/mocks/services/PhoneService.js";
import orderServiceMock from "@/mocks/services/OderService.js";
import statusServiceMock from "@/mocks/services/StatusService.js";
export default [...phoneServiceMock, ...orderServiceMock, ...statusServiceMock];
