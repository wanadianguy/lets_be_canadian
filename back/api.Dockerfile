FROM archlinux:base-devel as api

RUN pacman -Syu --noconfirm

RUN pacman -Sy --noconfirm nodejs

RUN pacman -Sy --noconfirm npm

COPY ./ ./api

WORKDIR ./api

RUN npm run clean

RUN npm ci

RUN npm run build

CMD npm run start
