import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type T_FEED_ORDER = 'FO_CHRONOLOGICAL' | 'FO_CURATED';
export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ required: true, sparse: true })
  username: string;
  @Prop()
  description: string;
  @Prop({ required: true })
  uuid: string;

  @Prop({ required: true, sparse: true })
  wallet: string;

  @Prop({ required: true, default: false })
  artist: boolean;

  @Prop({ required: true, default: false })
  verified: boolean;

  @Prop({ required: true, default: false })
  feedOrder: T_FEED_ORDER;

  @Prop()
  avatarLink: string;

  @Prop()
  twitter: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
