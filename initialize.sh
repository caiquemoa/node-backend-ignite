#!/bin/sh
yarn typeorm migration:run -d ./src/database/
yarn install
yarn dev