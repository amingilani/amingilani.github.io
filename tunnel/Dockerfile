# build stage
FROM golang:alpine3.12 AS build
RUN apk --no-cache add build-base git libc6-compat
RUN go get github.com/cloudflare/cloudflared/cmd/cloudflared
RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -v -x github.com/cloudflare/cloudflared/cmd/cloudflared

# actual container
FROM alpine:3.12
LABEL maintainer="Amin Shah Gilani <heyamin@gilani.me>" \
      description="A tunnel to proxy my site out to my own hostname"
RUN apk --no-cache add bash
COPY --from=build /go/cloudflared cloudflared
COPY run.sh /run.sh
ENTRYPOINT ["/run.sh"]
