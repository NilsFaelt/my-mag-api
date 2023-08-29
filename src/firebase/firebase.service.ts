import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FirebaseService {
  private readonly firebaseAdmin: admin.app.App;

  constructor() {
    const configPath = path.join(
      __dirname,
      '../../my-ma-40b0c-firebase-adminsdk-phqxc-2b06b145b6.json',
    );
    const serviceAccount = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    this.firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }
  async verifyIdToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      console.error('Firebase ID token verification error:', error);
      return null;
    }
  }

  getAdminInstance(): admin.app.App {
    return this.firebaseAdmin;
  }
}
