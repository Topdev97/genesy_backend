import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
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
  @ApiOperation({ description: 'https://prnt.sc/qmyW4JdZ8Txt' })
  async updateNftItem(
    @Param('tokenId') tokenId: string,
    @Body() updateNftDto: UpdateNftDto,
  ) {
    return await this.service.updateNftItem(tokenId, updateNftDto);
  }

  @Get('artist/:wallet')
  async getNftItemsByWallet(@Param('wallet') wallet: string) {
    return await this.service.getNftItemsByWallet(wallet);
  }
  @Get('user/:wallet')
  async getNftItemsByUser(@Param('wallet') wallet: string) {
    return await this.service.getNftItemsByUser(wallet);
  }
}
