import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import { APP_SECRET } from "../config";

export async function generateSignedToken(
  payload: Object = {},
  expiresIn: string = "1h"
) {
  const token = sign(payload, APP_SECRET, { expiresIn });
  return {
    token,
    expiresAt: new Date(Date.now() + ms(expiresIn)),
  };
}

export async function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    verify(token, APP_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}
