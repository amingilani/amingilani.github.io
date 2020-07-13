# build the site
FROM node:13-buster-slim as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
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
