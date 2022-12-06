import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateNftDto } from './nft.dto';
import { Nft, NftDocument } from './nft.schema';

@Injectable()
export class NftService {
  constructor(
    @InjectModel(Nft.name)
    private readonly nftModel: Model<NftDocument>,
  ) {}

  async findAll(): Promise<Nft[]> {
    return await this.nftModel.find().lean().exec();
  }
  async findItem(tokenId: number): Promise<Nft> {
    return await this.nftModel.findOne({ tokenId }).lean().exec();
  }

  async getNftItemsByWallet(wallet: string): Promise<Nft[]> {
    return await this.nftModel.find({ artist: wallet }).lean().exec();
  }
  async getNftItemsByUser(wallet: string): Promise<Nft[]> {
    return await this.nftModel.find({ owner: wallet }).lean().exec();
  }

  async updateNftItem(wallet: string, updateNftDto: UpdateNftDto) {
    await this.nftModel
      .findOneAndUpdate({ wallet }, updateNftDto, { upsert: true })
      .exec();
  }
}
