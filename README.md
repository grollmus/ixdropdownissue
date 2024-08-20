# ixdropdownissue
Example project to demonstrate a bug in IX version 2.4.0

When an ix-dropdown is used inside a ix-tree, it doesnt work anymore. Trigger-mechanism seems to be broken.
Outside ix-tree it works as expected.

relevant coding to reproduce issue can be found in files
  - app.component.html
  - app.component.ts

To start project open terminal and execute the following commands:
  - npm install
  - npm run start

then open in browser url http://127.0.0.1:4200/
