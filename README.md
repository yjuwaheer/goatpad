# goatpad

---

## Contributing

1. Fork repo to your github
2. create a branch named `package/feature` (like `client/navbar-login`) and make your changes
3. make a PR and make sure you include issue your PR cover in the comments
4. wait patiently for your code to be reviewed

## Setup

1. clone your fork
2. cd into your fork
4. run `yarn` - this downloads all dependencies for the project
5. in the directory `/packages/library` - run `yarn rollup`
6. in the directory `/packages/server` - run `cp .env.example .env` to add .env file containing port environment variable
7. from the root directory of the project - run `yarn dev` - this starts both the server and the client

## Please Add Documentation

You can find a `README.md` file in each of the package folders, please write a short description as you write a new piece of the app.

