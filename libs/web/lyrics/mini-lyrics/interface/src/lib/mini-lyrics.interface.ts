export interface MiniLyricsResponse {
  _type: 'return';
  orgcmd: string;
  result: 'OK' | 'NOT_FOUND';
  badrc: string;
  ls_dd: string;
  server_url: string;
  children: LyricsItem[];
}

export interface LyricsItem {
  _type: 'fileinfo';
  link: string;
  artist?: string;
  title?: string;
  album?: string;
  uploader?: string;
  rate?: string;
  ratecount?: number;
  downloads?: number;
  timelength?: number;
}
