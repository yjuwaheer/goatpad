# goatpad

---

## Setup

1. Fork repo to your GitHub account
1. Clone repo to your local machine
1. cd into your fork
1. run `npm install` - this downloads all dependencies for the project
1. from the root directory of the project - run `npm start` - this starts the react development client

## Contributing

1. Make sure your repo is up to date with the main project
   - Hit the fetch and merge button on GitHub
   - Run `git pull` on your local machine
1. Create a branch and name it for the feature you are working on (like `navbar-login`) and make your changes
1. Push your code to GitHub
1. On GitHub, make a PR to the `test` branch and make sure you include the issue your PR covers in the comments (create an issue if it doesn't exist)

## Please Add Documentation

You can find the `ProjectLog.md` file in the root of the project. Please write a short description of what you are doing as you write a new piece of the app.

## Project Structure

```
src
|--- assets
|--- components
|    |--- posts [matches name of page - lowercase]
|    |    |--- Post.jsx
|--- config
|--- hooks
|--- pages
|    |--- Posts.jsx
|--- schemas
|--- stores
|--- styles
|    |--- Common.styles.js
|--- test
|--- utils
```

Any frequently used styles should be placed in the `Common.styles.js` file. \
Otherwise create them within their own `page` or `component`.
