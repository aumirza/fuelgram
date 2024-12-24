import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import { jwtToken } from "@fuelgram/shared/types";
import {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_SECRET,
  ACTIVATION_TOKEN_EXPIRES_IN,
  ACTIVATION_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_EXPIRES_IN,
  RESET_PASSWORD_TOKEN_SECRET,
} from "../config";

const jwtConfig = {
  accessToken: {
    secret: ACCESS_TOKEN_SECRET,
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  },
  refreshToken: {
    secret: REFRESH_TOKEN_SECRET,
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  },
  activationToken: {
    secret: ACTIVATION_TOKEN_SECRET,
    expiresIn: ACTIVATION_TOKEN_EXPIRES_IN,
  },
  resetPasswordToken: {
    secret: RESET_PASSWORD_TOKEN_SECRET,
    expiresIn: RESET_PASSWORD_TOKEN_EXPIRES_IN,
  },
};

export async function generateSignedToken(
  payload: Object = {},
  tokenType:
    | "accessToken"
    | "refreshToken"
    | "activationToken"
    | "resetPasswordToken",
  expiresIn: string = "1h"
): Promise<jwtToken> {
  const token = sign(payload, jwtConfig[tokenType].secret, {
    expiresIn: jwtConfig[tokenType].expiresIn,
  });
  return {
    token,
    expiresAt: new Date(Date.now() + ms(expiresIn)),
  };
}

export async function verifyToken(
  token: string,
  tokenType:
    | "accessToken"
    | "refreshToken"
    | "activationToken"
    | "resetPasswordToken"
) {
  return new Promise((resolve, reject) => {
    verify(token, jwtConfig[tokenType].expiresIn, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}
