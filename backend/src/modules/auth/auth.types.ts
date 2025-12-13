export interface RegisterUserInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: string;
  email: string;
}