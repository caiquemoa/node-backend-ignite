#!/bin/sh
yarn typeorm migration:run -d ./src/database/
yarn dev