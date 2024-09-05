// user.controller.ts

import { userAPI } from "@/core/infrastructure/apis/user.api";
import { userService } from "@/core/application/services/user.service";

export const userController = () => {
  return userService(userAPI);
};
