import { IsBoolean, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateSnippetDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['typescript', 'javascript', 'python'])
    language: string;

    @IsBoolean()
    isPublic: boolean;
}