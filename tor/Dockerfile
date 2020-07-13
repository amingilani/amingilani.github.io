# actual container
FROM alpine:3.12
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A Tor hidden service that proxies my website"
RUN apk add --update --no-cache \
    --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main \
    tor bash
RUN mkdir -p /etc/tor/hidden_service && chmod 700 /etc/tor/hidden_service
COPY torrc /etc/tor/torrc
COPY run.sh /run.sh
ENTRYPOINT ["/run.sh"]
