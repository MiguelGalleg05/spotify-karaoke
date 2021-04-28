const fs = require('fs');

const file_begin = 'export const secrets = ';
const secrets = {
  spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET || '',
};

fs.writeFile(
  'apps/spotify/src/environments/secrets.ts',
  file_begin + JSON.stringify(secrets) + ';',
  'utf-8',
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
