// user.repository.ts

import { GetUsersDto } from "@/core/domain/dtos/user.dto";
import { UserEntity } from "@/core/domain/entities/user.entity";

export interface UserRepository {
  getUsers(payload: GetUsersDto): Promise<UserEntity[]>;
}
