
<h1 align="center">
  <br>
  <a href="https://github.com/YouAPI/You.JS"><img src="./assets/You.JS.png" alt="You.JS Logo" width="200"></a>
  <br>
  <br>
  You.JS
  <br>
</h1>

<h4 align="center">An unofficial JavaScript library for <a href="https://api.you.com/" target="_blank">You.com</a>.</h4>

<!-- TODO: Re-add the commented-out stuff but javascriptified -->

<!-- <div align="center">
  [![Python Version](https://img.shields.io/pypi/pyversions/youdotcom.svg)](https://pypi.org/project/youdotcom/)
  [![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/silkepilon/youdotcom/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
  [![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
  [![Security: bandit](https://img.shields.io/badge/security-bandit-green.svg)](https://github.com/PyCQA/bandit)
  [![Pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/silkepilon/youdotcom/blob/master/.pre-commit-config.yaml)
  [![Semantic Versions](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--versions-e10079.svg)](https://github.com/silkepilon/youdotcom/releases)
  [![License](https://img.shields.io/github/license/silkepilon/youdotcom)](https://github.com/silkepilon/youdotcom/blob/master/LICENSE)
  ![Coverage Report](assets/images/coverage.svg)
</div> -->

<p align="center">
  <a href="#about">About</a> •
  <!-- <a href="#key-features">Key Features</a> • -->
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <!-- <a href="#credits">Credits</a> • -->
  <a href="#license">License</a>
</p>

## About
Welcome to the the You.JS Library!

This library allows developers to easily access and utilize all of the functionality of the You.com platform through a simple and intuitive JavaScript API. With the library, developers can access a variety of You.com apps and services, including but not limited to:

* The search engine

To get started with You.JS, read <a href="#install">install</a> and then <a href="#how-to-use">how to use</a>.

We hope you enjoy using You.JS!
> adapted from [YouDotCom](https://github.com/YouAPI/YouDotCom)'s README.md


## Install

To install the You.JS library, simply run the following command in your terminal:

```bash
npm install youdotjs # for npm
yarn add youdotjs # for yarn
pnpm add youdotjs # for pnpm
bun install youdotjs # for bun
```

> Note: You.JS is named `youdotjs` on npm because `youjs` is already taken and `you.js` is too similar.

> Note: It should work in the browser, but it's not tested.

## How To Use

### Search

To search You.com, you can use the `search` function. It takes in a query and returns a `Promise` that resolves to a `SearchResult` object.

```javascript
const you = require('youdotjs');

const API_TOKEN = 'Put your API token here';

you.search('Hello world!', API_TOKEN).then((result) => {
  console.log(result);
});
```

### YouChat

Currently not implemented.

## Discord

You.com has an official Discord server! Join it [here](https://you.club). Don't expect to get any support for this library there, though.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details
