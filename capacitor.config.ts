import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.googleauthentication',
  appName: 'demo-ionic-angular',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: '21295945589-chvqofrg5ko4v8hnna5uq4ls77b95uhe.apps.googleusercontent.com',
    }
  }
};

export default config;
