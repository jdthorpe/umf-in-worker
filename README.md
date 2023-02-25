# Minimal Reproducible using UMF modules in Web Workers

**This feature was added in version 1.0.5 of the [universal-module-federation-plugin](https://www.npmjs.com/package/universal-module-federation-plugin)**

Install dependencies and start the app with:

```sh
yarn
cd packages/main
yarn start
```

Then navigate to [localhost:3001]() and open the console, which should have messages like:

```txt
bootstrapping the main app...
main says: typeof react object
bootstrapping the worker...
worker says: typeof react object
```
