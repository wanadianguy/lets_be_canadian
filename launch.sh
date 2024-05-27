#!/bin/bash

git switch main
git pull

docker compose --profile all up -d
