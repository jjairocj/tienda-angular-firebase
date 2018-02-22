// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyA7XA3w7p40nbLGGkGkbDPN5_sxp5posgE",
    authDomain: "tiendatestin.firebaseapp.com",
    databaseURL: "https://tiendatestin.firebaseio.com",
    projectId: "tiendatestin",
    storageBucket: "tiendatestin.appspot.com",
    messagingSenderId: "954581843965"
  }
};
