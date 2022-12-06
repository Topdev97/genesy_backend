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

  @Prop({ required: true, default: 0 })
  feedOrder: 0 | 1;

  @Prop()
  avatarLink: string;

  @Prop()
  twitter: string;

  @Prop({ default: 0 })
  volumeWeek: number;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
