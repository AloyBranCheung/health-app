#!/usr/bin/env bash

concurrently 'npm run dev --prefix api' 'npm run start-local --prefix client' 