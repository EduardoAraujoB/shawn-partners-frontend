# Overview

The front part of the fullstack challenge by shawn and partners, this repo was deployed into heroku https://shawn-partners-frontend.herokuapp.com/

## Sumary

- [ How to setup ](#how-to-setup)
- [ Scripts ](#scripts)
- [ Code Linters ](#code-linters)

## How to Setup

After download the project run this command to install the project dependencies

```
yarn
```

after that, run this command to start the aplicattion

```
yarn start
```

Now you can open your browser on http://localhost:3000 and the aplicattion will be running.

## Scripts

There is three types of scritpts on the project

- `start`: Run the aplicattion on development mode, so you can edit files on the aplicattion and the server will re-start automatically. **note**: This script isn't recommend for **production**
- `build`: Generate a production build of the aplicattion, this command just build the aplicattion, to run it will need the **node**, see more here [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. **note**: That's a one way operation, be careful about that

## Code Linters

This project use two different code linters and a another
extension to the IDE, that is...

### Eslint

Or EcmaScriptLint, is the linter responsible to check problems in the syntax and return errors, your configurations are shared and used by others linters

### Prettier

This linter is used only for check the **code style**, they don't will check the syntax, just find a way to do the code more **legible** and have a integration with **eslint**

### Editor Config

That isn't a linter, just a extension to share some configs between other editors, like the format of the end of lines, identation with spaces or tabs, etc...
