> This is a temporary “Quick Guide”.
> It is best to use Ubuntu for the OS and VS Code for the text-editor.

## Basic Commands

* `npm install` - Use this to install dependencies.
* `npm start` - Use this to run the `node server.js` command.
* `npm run server` - Use this to run nodemon which will run a server that will monitor any changes.

## How To Lint

Lint is a command line tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.
We are only going to use lint for javascript files.

Every time you create the `node_modules` directory with the command `npm install`, you will have to initialize lint with:

```
npm run lint-init
```

Go through the config. Choose the `AIRBNB` popular configuration, say yes to using react, and `JSON` format.

Now you can use the following commands to use lint:

* `npm run lint-all` - This will use lint on all `js` and `jsx` files.
* `npm run lint "YourFile.js"` - This will use lint on a specific file. One again, you can also use lint on `jsx` files as well.

> If you decide to delete the `node_modules` directory to reinstall all dependencies, make sure you delete the `.eslintrc.json` file as well.

---

* Update:

```bash
sudo apt-get update
sudo apt-get upgrade
```

* Adjust Date & Time
* Install Git:

```bash
sudo apt-get install git
```

## Setting up VS Code

### _Some Settings_

```json
    "editor.wordWrap": "on",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "editor.formatOnSave": true,
```

### Extensions

* Bracket Pair Colorizer
* ES7 React/Redux/React-Native/JS snippets
* Prettier formatter for Visual Studio Code
* Live Server (just to help develop the theme)
* Node.js Modules Intellisense

### Optional Extensions

* Auto Close Tag
* Spelling Checker for Visual Studio Code
* Git History, Search and More (including git log)
* GitLens

---

## Node

### Installing Node

> The best way to install node on ubuntu is using nvm. If you are on macOS or Windows then just use the installer. Do not use the package manger `apt` on ubuntu.

* How to installing using NVM:
* Use bash instead of ZSH:

```bash
exec bash
```

```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev
```

Once the prerequisite packages are installed, you can pull down the nvm installation script from the project's GitHub page. The version number may be different, but in general, you can download it with curl:

```
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
```

And inspect the installation script with nano:

```
nano install_nvm.sh
```

Run the script with bash:

```
bash install_nvm.sh
```

It will install the software into a subdirectory of your home directory at `~/.nvm`. It will also add the necessary lines to your`~/.profile` file to use the file.

To gain access to the nvm functionality, you'll need to log out and log back in again, or you can source the ~/.profile file so that your current session knows about the changes:

* /If you use ZSH, now we need to switch back to ZSH/ - _OPTIONAL_

```bash
exec zsh

or just reset terminal
```

Now that you have nvm installed, you can install isolated Node.js versions.

To find out the versions of Node.js that are available for installation, you can type:

```
nvm ls-remote
```

Now you can install whichever version you want. LTS is preferred:

```
nvm install "LTS version"
```

Usually, nvm will switch to use the most recently installed version. You can explicitly tell nvm to use the version we just downloaded by typing:

```
nvm use "version"
```

When you install Node.js using nvm, the executable is called node. You can see the version currently being used by the shell by typing:

```
node -v
```

If you have multiple Node.js versions, you can see what is installed by typing:

`nvm ls`

If you wish to default one of the versions, you can type:

`nvm alias default "version"`

This version will be automatically selected when a new session spawns. You can also reference it by the alias like this:

`nvm use default`

Each version of Node.js will keep track of its own packages and has npm available to manage these.

_To update NVM_
Latest version:

```
nvm install node --reinstall-packages-from=node
```

Stable (LTS) version:

```
nvm install lts/* --reinstall-packages-from=node
```

### Node not working from SUDO

> My solution is to create symbolic links from the versions of node and npm I'm using to /usr/local/bin:

```bash
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
```

* This makes npm and node available to all users.
