#!/usr/bin/env bash

# abort on errors
set -e

# build
yarn build

# check if `dist` directory exists
if [ -d "dist" ]; then
  rm -rf dist
fi

# create a new `dist` directory
mkdir dist

# copy files

cp package.json index.js .eslintrc.json .eslintrc.*.json README.md dist

# navigate into the build output directory
cd dist

# initialize git
git init
git add -A
git commit -m 'publish'

# force push to coding.net
git push -f https://e.coding.net/haixeefrontend/utils/eslint-config.git HEAD:dist
