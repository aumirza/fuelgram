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
    const accessToken = await generateSignedToken(user, "accessToken");
    return accessToken;
  }

  static async generateRefreshToken(user: IUserPublic) {
    const refreshToken = await generateSignedToken(user, "refreshToken");
    return refreshToken;
  }
  static async verifyAccessToken(token: string) {
    return verifyToken(token, "accessToken");
  }
  static async verifyRefreshToken(token: string) {
    return verifyToken(token, "refreshToken");
  }
}
