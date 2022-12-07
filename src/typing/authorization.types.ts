import { UserPayload } from './users.types';

export interface AuthorizationResponse {
  accessToken: string;
  user: UserPayload;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  user: UserPayload;
}
