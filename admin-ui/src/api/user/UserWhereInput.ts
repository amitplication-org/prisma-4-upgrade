import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { Profile } from "../profile/Profile";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  Profile?: ProfileWhereUniqueInput;
  username?: StringFilter;
};
