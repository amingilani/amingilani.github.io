FROM jakejarvis/cloudflare-argo:latest
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A tunnel to proxy my site out to my own hostname"

COPY run.sh /run.sh

ENTRYPOINT ["/run.sh"]
