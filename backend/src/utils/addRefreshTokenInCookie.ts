import { Response } from "express";

export function addRefreshTokenInCookie(res: Response, refreshToken: jwtToken) {
  res.cookie("refreshToken", refreshToken.token, {
    httpOnly: true, // Cookie accessible only via HTTP(S) (not JavaScript)
    secure: true, // Only send cookie over HTTPS
    sameSite: "none", // Prevents cross-site request forgery
    maxAge: 7 * 24 * 60 * 60 * 1000, // Set cookie to expire in 7 days
  });
}
