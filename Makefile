# Todo el JS se ejecuta dentro del contenedor.
DC = docker compose
RUN = $(DC) run --rm --no-deps slidev

.PHONY: image install up down logs shell build add

image:            ## Construye la imagen
	$(DC) build

install:          ## Instala dependencias (respeta minimumReleaseAge = 15 días)
	$(RUN) pnpm install --frozen-lockfile

up:               ## Servidor de desarrollo en http://localhost:3030
	$(DC) up -d && $(DC) logs -f

down:
	$(DC) down

logs:
	$(DC) logs -f

shell:            ## Shell dentro del contenedor
	$(RUN) bash

build:            ## Genera la web estática en dist/
	$(RUN) pnpm exec slidev build

add:              ## make add PKG=nombre@version
	$(RUN) pnpm add $(PKG)
