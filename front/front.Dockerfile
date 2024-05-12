FROM node:latest

RUN npm install -g typescript

COPY ./ ./front

WORKDIR ./front

RUN npm run setup

CMD npm run start
