// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC0xKVasoEpqoP2EY6WIApjfE9xIg9sx0g",
    authDomain: "ng-typography.firebaseapp.com",
    databaseURL: "https://ng-typography.firebaseio.com",
    projectId: "ng-typography",
    storageBucket: "ng-typography.appspot.com",
    messagingSenderId: "207349326955"
  }
};
