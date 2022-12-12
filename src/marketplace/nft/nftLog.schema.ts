import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NftLogDocument = NftLog & Document;

@Schema()
export class NftLog {
  @Prop({ required: true })
  tokenId: number;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  text: string;
}

export const NftLogSchema = SchemaFactory.createForClass(NftLog);
