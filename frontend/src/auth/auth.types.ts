export interface AuthContextType {
  token: string | null;
  role: "ADMIN" | "USER" | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}