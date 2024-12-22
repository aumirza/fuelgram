import { db } from "../db/db";

// will use db and redis
// create session
// find session by token
// check if session is revoked or expired
// revoke session

export class SessionService {
  static async findSessionByToken(refreshToken: string) {
    const session = await db.query.sessions.findFirst({
      where: (session, { eq, and }) =>
        and(
          eq(session.refreshTokenHash, refreshToken)
          // eq(session.revokedAt, null)
        ),
    });

    // fetch session from redis

    return session;
  }

  static async revokeSession(refreshToken: string) {
    return;
  }

  static async verifyActiveSession(refreshToken: string) {
    const session = await this.findSessionByToken(refreshToken);

    if (!session || session.revokedAt || new Date() > session.expiresAt) {
      return false;
    }

    return true;
  }
}
