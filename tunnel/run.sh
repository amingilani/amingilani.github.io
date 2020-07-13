#!/bin/bash

# check if required variables are set
[[ -z "$TUNNEL_HOSTNAME" ]] && { echo "TUNNEL_HOSTNAME is not set" ; exit 1; }
[[ -z "$TUNNEL_URL" ]] && { echo "TUNNEL_URL is not set" ; exit 1; }
[[ -z "$TUNNEL_CERT" ]] && { echo "TUNNEL_CERT is not set" ; exit 1; }

# decode the cert and place it in position for the script
mkdir -p /etc/cloudflared
echo $TUNNEL_CERT | base64 -d > /etc/cloudflared/cert.pem
echo 'Saved certificate, starting tunnel'

# execute the tunnel
./cloudflared tunnel --origincert /etc/cloudflared/cert.pem
