# build the site
FROM node:13-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk --no-cache add --virtual native-deps \
  build-base python libpng-dev bash

RUN apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev

RUN  npm install --quiet node-gyp -g
RUN  npm ci --quiet



COPY . ./
RUN npm run build

# run in a clean container
FROM caddy:2.0.0
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A GatsbyJS site running out of a docker container"

# copy built site
COPY --from=build /app/public /site


# copy configuration file
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
