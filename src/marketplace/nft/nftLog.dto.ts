export class BaseNftLogDto {
  timestamp: Date;
  text: string;
  wallet1: string;
  wallet2: string;
}

export class CreateNftLogDto extends BaseNftLogDto {}
