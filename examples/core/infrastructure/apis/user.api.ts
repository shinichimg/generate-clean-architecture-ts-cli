// user.api.ts

import { GetUsersDto } from "@/core/domain/dtos/user.dto";
import { UserEntity } from "@/core/domain/entities/user.entity";
import get from "lodash/get";
import axios from 'axios';
import { UserRepository } from "@/core/domain/repositories/user.repository";

export const userAPI: UserRepository = {
  getUsers: async (payload: GetUsersDto) => {
    const userResponse = await axios.post<UserEntity[]>('/users/get', payload);
    return get(userResponse, "data", []);
  },
};
