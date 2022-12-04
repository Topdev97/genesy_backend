import { T_FEED_ORDER } from './profile.schema';

export class BaseProfileDto {
  username: string;
  description: string;
  //   uuid: string;
  //   artist: boolean;
  //   verified: boolean;
  feedOrder: T_FEED_ORDER;
  avatarLink: string;
  twitter: string;
}

export class UpdateProfileDto extends BaseProfileDto {}
