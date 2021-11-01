// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'imgur-refresh',
    appId: '1:461193064195:web:b791c79a666efc0599c336',
    databaseURL: 'https://imgur-refresh-default-rtdb.firebaseio.com',
    storageBucket: 'imgur-refresh.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyC6rZ222WiKzXLDHc79oavDoggmI6vGepE',
    authDomain: 'imgur-refresh.firebaseapp.com',
    messagingSenderId: '461193064195',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
