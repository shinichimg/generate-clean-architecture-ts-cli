// user.service.ts

import { GetUsersDto } from "@/core/domain/dtos/user.dto";
import { UserRepository } from "@/core/domain/repositories/user.repository";

export const userService = (
  userRepository: UserRepository
): UserRepository => {
  const getUsers = async (payload: GetUsersDto) => {
    return await userRepository.getUsers(payload);
  };

  return {
    getUsers,
  };
};
