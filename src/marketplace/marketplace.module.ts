import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Profile, ProfileSchema } from './profile/profile.schema';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { NftService } from './nft/nft.service';
import { NftController } from './nft/nft.controller';
import { Nft, NftSchema } from './nft/nft.schema';

@Module({
  providers: [ProfileService, NftService],
  controllers: [ProfileController, NftController],
  imports: [
    MongooseModule.forFeature(
      [
        { name: Profile.name, schema: ProfileSchema },
        { name: Nft.name, schema: NftSchema },
      ],
      'test',
    ),
  ],
})
export class MarketplaceModule {}
