export interface RegisterUserInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: string;
  email: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}