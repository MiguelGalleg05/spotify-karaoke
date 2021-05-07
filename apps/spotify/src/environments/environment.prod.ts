import * as pjson from '../../../../package.json';
import { secrets } from './secrets';

export const environment = {
  production: true,
  ga: 'G-6Q89SD919R',
  app_version: pjson.version,
  spotify_client_id: '88bbdd189e5d49849d7a6358c7d8a8ff',
  ...secrets,
};
