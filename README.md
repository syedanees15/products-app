# Prerequisites

Make sure that your local has `node.js`, `npm` and `angular CLI` installed as described on https://angular.io/guide/setup-local (Please ignore STEP 2, as it has already been taken care of in this repo)


## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## NOTES

- Since we will not have a server and both components live under different URLs, the data can be cached in a shared service.
https://github.com/syedanees15/products-app/blob/master/src/app/products-data.service.ts can be used for this purpose

- Mock data can be found in mock-products.ts
