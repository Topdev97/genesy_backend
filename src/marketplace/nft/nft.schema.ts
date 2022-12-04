import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NftDocument = Nft & Document;

@Schema()
export class Nft {
  @Prop({ required: true, sparse: true })
  tokenId: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  imageLink: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: 0 })
  lastSoldAmount: number;

  @Prop({ default: new Date(0) })
  lastSoldAt: Date;

  @Prop({ default: new Date(0) })
  mintedAt: Date;
  @Prop({ default: false })
  curated: boolean;
}

export const NftSchema = SchemaFactory.createForClass(Nft);
