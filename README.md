# To Reproduce

1. Clone the repository
   ```bash
   git clone https://github.com/darwish/openapi-typescript-poc
   cd openapi-typescript-poc
   ```
2. Install the dependencies
   ```bash
   yarn install
   ```
3. Try to build

   ```bash
   yarn build

   # Output:
   node_modules/openapi-fetch/dist/cjs/index.d.cts:10:8 - error TS1479: The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("openapi-typescript-helpers")' call instead.

   10 } from "openapi-typescript-helpers";
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


   Found 1 error in node_modules/openapi-fetch/dist/cjs/index.d.cts:10
   ```
