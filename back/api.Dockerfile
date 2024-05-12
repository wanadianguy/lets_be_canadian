FROM node:latest

RUN npm install -g typescript

COPY ./ ./api

WORKDIR ./api

RUN npm run setup

CMD npm run start
