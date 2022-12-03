import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { config } from 'dotenv';
config();
const MONGODB_URI = process.env.MONGODB_URI;
@Module({
  imports: [
    MongooseModule.forRoot(`${MONGODB_URI}/test?authSource=admin`, {
      connectionName: 'test',
    }),
    MarketplaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
