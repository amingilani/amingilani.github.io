# Amin Shah Gilani

Hi, this is the source code to my personal website.

Used in this:

+ GatsbyJS
+ Bulma

## Docker Deploys

Ensure the environment variables are present for Argo to tunnel the site out to the public internet:

+ `TUNNEL_CERT`: This will be decoded and placed in: `/etc/cloudflared/cert.pem`
+ `TUNNEL_HOSTNAME`: The terminal FQDN where the site will deploy via Cloudflare's Argo. E.g. `beta.gilani.me`.
+ `TUNNEL_URL`: The local URL where the site is being served. E.g. `http://localhost:3000`
