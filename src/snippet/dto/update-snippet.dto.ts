import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateSnippetDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    code?: string;

    @IsString()
    @IsOptional()
    @IsIn(['typescript', 'javascript', 'python'])
    language?: string;

    @IsBoolean()
    @IsOptional()
    isPublic?: boolean;
}