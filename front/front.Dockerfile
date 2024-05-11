FROM archlinux:base-devel as front

RUN pacman -Syu --noconfirm

RUN pacman -Sy --noconfirm nodejs

RUN pacman -Sy --noconfirm npm

COPY ./ ./front

WORKDIR ./front

RUN npm run clean

RUN npm ci

RUN npm run build

CMD npm run start
