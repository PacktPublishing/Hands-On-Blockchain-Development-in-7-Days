# Learning Blockchain Application Development

## React, Redux, Truffle, and Material-UI Dapp

In addition to Webpack and React, this box adds: React-Router, Redux and Material-UI for easy skinning of a Dapp.

## Installation

1. Install node.js (version 10.15.0)

1. Install webpack globally
    ```
    npm install -g webpack
    npm install -g webpack-cli
    ```

1. Install npm dependencies
   ```javascript
   npm install
   ```

1. Install truffle and Ganache, both available from [Truffle](https://truffleframework.com/).

1. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

1. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm start
    ```

## Docker

1. Build the docker container.
    ```
    docker build -t etherslist .
    ```

1. Launch the docker container.
    ```
    docker run -p 3000:3000 etherslist:latest
    ```

1. Browse to http://localhost:3000

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.
