import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileService } from '../profile/profile.service';
import { UpdateNftDto } from './nft.dto';
import { Nft, NftDocument } from './nft.schema';

@Injectable()
export class NftService {
  constructor(
    @InjectModel(Nft.name)
    private readonly nftModel: Model<NftDocument>,
    private readonly profileService: ProfileService,
  ) {}

  async findAll(): Promise<Nft[]> {
    return await this.nftModel.find().lean().exec();
  }
  async findItem(tokenId: number): Promise<any> {
    const nftItem: Nft & any = await this.nftModel
      .findOne({ tokenId })
      .lean()
      .exec();
    const [owner, artist] = await Promise.all([
      this.profileService.getProfile(nftItem.owner),
      this.profileService.getProfile(nftItem.artist),
    ]);

    return { ...nftItem, artistObj: artist, ownerObj: owner };
  }

  async getNftItemsByWallet(wallet: string): Promise<Nft[]> {
    return await this.nftModel.find({ artist: wallet }).lean().exec();
  }
  async getNftItemsByUser(wallet: string): Promise<Nft[]> {
    return await this.nftModel.find({ owner: wallet }).lean().exec();
  }

  async updateNftItem(tokenId: number, updateNftDto: UpdateNftDto) {
    await this.nftModel
      .findOneAndUpdate({ tokenId }, updateNftDto, {
        upsert: true,
      })
      .exec();
  }

  async getPrimaryItems(order: number) {
    const sort: any = {};
    if (order === 0) sort.mintedAt = 1;
    if (order === 1) sort.curated = 1;
    return await this.nftModel.find().sort(sort).lean().exec();
    // await this.nftModel.find({}).lean().exec();
  }
}
