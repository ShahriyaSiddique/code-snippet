import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class ShareSnippetDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  userIds: string[];
} 