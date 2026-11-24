# Node 24 LTS, imagen publicada el 2026-10-06, fijada por digest (inmutable)
FROM node:24.21.0-bookworm-slim@sha256:d6aa754f16b3197301076f047b5def2f02ea1dbbc2ca920407d46d7ec7f87b20

# pnpm fijado a una versión con >15 días publicada; sin scripts de instalación
RUN npm install -g --ignore-scripts pnpm@12.16.1 && npm cache clean --force

USER node
WORKDIR /app
ENV PNPM_HOME=/home/node/.local/share/pnpm \
    CI=true
EXPOSE 3030
