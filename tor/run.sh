#!/bin/bash

# check if required variables are set
[[ -z "$TOR_HOSTNAME" ]] && { echo "TOR_HOSTNAME is not set" ; exit 1; }
[[ -z "$TOR_PUBKEY" ]] && { echo "TOR_PUBKEY is not set" ; exit 1; }
[[ -z "$TOR_SECKEY" ]] && { echo "TOR_SECKEY is not set" ; exit 1; }

# decode the keys and place them in position

echo $TOR_PUBKEY | base64 -d > /etc/tor/hidden_service/hs_ed25519_public_key.
echo $TOR_SECKEY | base64 -d > /etc/tor/hidden_service/hs_ed25519_secret_key
echo 'Saved keys, starting tor proxy'

# execute the proxy
tor
