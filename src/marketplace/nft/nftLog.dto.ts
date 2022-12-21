class LogItem {
  text: string;
  link: string;
}
export class BaseNftLogDto {
  timestamp: Date;
  content: Array<LogItem>;
}

export class CreateNftLogDto extends BaseNftLogDto {}
