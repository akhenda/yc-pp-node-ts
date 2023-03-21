# node-typescript-jest-boilerplate

[![Merge](https://github.com/akhenda/yc-node-ts/actions/workflows/merge.yml/badge.svg)](https://github.com/akhenda/yc-node-ts/actions/workflows/merge.yml) ![Branches](./__badges__/coverage-branches.svg) ![Functions](./__badges__/coverage-functions.svg) ![Lines](./__badges__/coverage-lines.svg) ![Statements](./__badges__/coverage-statements.svg) ![Jest coverage](./__badges__/coverage-jest%20coverage.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Boilerplate for a node server or library written in typescript, using jest as the test runner.

## Usage

Clone the boilerplate as a new project:

```bash
git clone https://github.com/bschlenk/node-typescript-jest-boilerplate.git <project>
```

Update [package.json](package.json) as you see fit.

## Modifications

If this is for a library only, then chances are you don't need nodemon. You can make the following changes to remove it:

- Delete `nodemon.json`
- Remove `watch` from `package.json` scripts
- Remove `nodemon` from `package.json` devDependencies
