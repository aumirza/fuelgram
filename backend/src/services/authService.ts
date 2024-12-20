import { IUserPublic } from "../types/user";
import { generateSignedToken, verifyToken } from "../utils/tokenUtils";

export class AuthService {
  static async generateTokens(user: IUserPublic) {
    return {
      accessToken: await this.generateAccessToken(user),
      refreshToken: await this.generateRefreshToken(user),
    };
  }

  static async generateAccessToken(user: IUserPublic) {
    const accessToken = await generateSignedToken(user, "30m");
    return accessToken;
  }

  static async generateRefreshToken(user: IUserPublic) {
    const refreshToken = await generateSignedToken(user, "7d");
    return refreshToken;
  }
  static async verifyToken(token: string) {
    return verifyToken(token);
  }
}
