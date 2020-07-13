FROM alpine:3.12
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A Tor hidden service that proxies my website"

# fetch dependencies
RUN apk add --update --no-cache \
    --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main \
    tor bash


# make service folder and reduce permissions
RUN mkdir -p /etc/tor/hidden_service && \
  chmod 700 /etc/tor/hidden_service

# copy config
COPY torrc /etc/tor/torrc

# copy runtime
COPY run.sh /run.sh

ENTRYPOINT ["/run.sh"]
