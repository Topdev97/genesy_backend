import { T_FEED_ORDER } from './profile.schema';

export class BaseProfileDto {
  username: string;
  description: string;
  //   uuid: string;
  //   artist: boolean;
  //   verified: boolean;
  feedOrder: 0 | 1;
  avatarLink: string;
  twitter: string;
  totalVolume: number;
}

export class UpdateProfileDto extends BaseProfileDto {}
