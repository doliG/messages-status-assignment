This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Demo hosted here http://messages-status-assignment.surge.sh/

## Table of Contents

- [Quickstart](#quickstart)
- [Available scripts](#available-scripts)
- [Codebase](#codebase)
  * [File organisation](#file-organisation)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Styling](#styling)
  * [CI/CD](#ci-cd)
- [Learn More](#learn-more)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Quickstart

```bash
git clone git@github.com:doliG/messages-status-assignment.git
yarn # Install deps
yarn start # Start dev server
```

If you don't have yarn, you use npm.

```bash
git clone git@github.com:doliG/messages-status-assignment.git
npm # Install deps
npm start # Start dev server
```

## Available scripts

- `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

- `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `yarn deploy`
Builds the app, then deploy it.

## Codebase

### File organisation

We group files by funcitonnality, then by type.

```bash
src/messages
├── components/ # Contains presentational components with almost no logic
├── containers/ # Contains wrapper with logic
└── reducer/    # Store logic
```

More information:

- https://create-react-app.dev/docs/folder-structure
- https://fr.reactjs.org/docs/faq-structure.html

### Contributing

We use a simple flow with git. It assumes you are familiar with branch. Each merge request goes directly to master, and each merge into master will trigger a production deployment.

Steps:
- Create a new branch
- Develop...
- Please rebase your changes into one commit if possible
- Create a pull request

### Testing

We use the built-in toolkit of create-react-app which is based on Jest and react testing library.

More informations:
- https://create-react-app.dev/docs/running-tests/
- https://testing-library.com/docs/intro
- https://jestjs.io/docs/en/getting-started

### Styling

We use tailwind - a css based framework, to style our component. It's very easy to use, and feel like a breeze once you are familiar with their class syntax.

More information: https://tailwindcss.com/

### CI/CD

To implement, you can do it if you want. Goal: on commit/merge test, on merge master deploy.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn typescript, check out the [Typescript documentation](https://www.typescriptlang.org/)