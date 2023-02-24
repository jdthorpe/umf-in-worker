# Minimal Reproducible Example for Error with Web Workers

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
Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'containerImportMap')
while loading "." from webpack/container/reference/@remix-run/router
```

If you run `npx webpack` in the main module, you can see that the error
arrises from this file `/packages/main/dist/src_worker_js-webpack_container_reference_remix-run_router.js`
which contains a reference to `_global.__umfplugin__`, which is only created in `dist/main.js`, which is only run in the main thread and not the worker.
