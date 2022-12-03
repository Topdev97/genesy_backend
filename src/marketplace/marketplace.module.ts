import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Profile, ProfileSchema } from './profile/profile.schema';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports: [
    MongooseModule.forFeature(
      [{ name: Profile.name, schema: ProfileSchema }],
      'test',
    ),
  ],
})
export class MarketplaceModule {}
