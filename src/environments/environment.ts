// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBE8MaPGsr_K06B33_hk0C2UlhbbitThVA",
    authDomain: "blog-app-19caf.firebaseapp.com",
    databaseURL: "https://blog-app-19caf.firebaseio.com",
    projectId: "blog-app-19caf",
    storageBucket: "blog-app-19caf.appspot.com",
    messagingSenderId: "767520763733"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
