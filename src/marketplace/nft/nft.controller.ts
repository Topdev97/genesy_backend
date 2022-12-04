import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateNftDto } from './nft.dto';
import { NftService } from './nft.service';

@Controller('nfts')
export class NftController {
  constructor(private readonly service: NftService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':tokenId')
  async getNftItem(@Param('tokenId') tokenId: number) {
    return await this.service.findItem(tokenId);
  }
  @Put(':tokenId')
  async updateNftItem(
    @Param('tokenId') tokenId: string,
    @Body() updateNftDto: UpdateNftDto,
  ) {
    return await this.service.updateNftItem(tokenId, updateNftDto);
  }
}
