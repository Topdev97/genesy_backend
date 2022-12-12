export class BaseNftDto {
  name: string;
  description: string;
  imageLink: string;
  artist: string;
  owner: string;
  price: number;
  royalty: number;
  lastSoldAmount: number;
  lastSoldAt: Date;
  mintedAt: Date;
  curated: boolean;
}

export class UpdateNftDto extends BaseNftDto {}
