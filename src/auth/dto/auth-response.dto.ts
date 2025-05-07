export class UserResponseDto {
  id: string;
  name: string;
  email: string;
}

export class AuthResponseDto {
  user: UserResponseDto;
  accessToken: string;
}