#!/bin/sh
npm run typeorm migration:run -d ./src/database
npm run dev