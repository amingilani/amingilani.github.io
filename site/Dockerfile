# Build stage
FROM node:13-alpine as build

# setup workspace
WORKDIR /app
RUN apk --no-cache add --virtual native-deps \
  build-base python libpng-dev bash
RUN apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev

# Install JavaScript dependencies
COPY package.json package-lock.json ./
RUN  npm ci --quiet

# Build site
COPY . ./
RUN npm run build

# Run in a clean container
FROM caddy:2.0.0
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A GatsbyJS site running out of a docker container"

# Copy built site
COPY --from=build /app/public /site


# Copy configuration file
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
