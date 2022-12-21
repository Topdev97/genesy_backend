import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NftLogDocument = NftLog & Document;

@Schema()
export class NftLog {
  @Prop({ required: true })
  tokenId: number;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ type: Object })
  content: {
    text: string;
    link: string;
  }[];
}

export const NftLogSchema = SchemaFactory.createForClass(NftLog);
