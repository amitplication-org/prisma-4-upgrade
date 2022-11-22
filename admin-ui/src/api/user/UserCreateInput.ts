import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { Profile } from "../profile/Profile";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  Profile?: ProfileWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
