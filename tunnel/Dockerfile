FROM alpine:3.12
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A tunnel to proxy my site out to my own hostname"

# FROM ubuntu:18.04
# LABEL maintainer="Jake Jarvis <jake@jarv.is>"

RUN apk --no-cache add wget ca-certificates tar

RUN wget -O cloudflared.tgz https://bin.equinox.io/c/VdrWdbjqyF/cloudflared-stable-linux-arm.tgz \
 && tar -xzvf cloudflared.tgz \
 && rm cloudflared.tgz \
 && chmod +x cloudflared

COPY run.sh /run.sh

ENTRYPOINT ["/run.sh"]
