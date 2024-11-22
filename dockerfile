FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# copy and install dependencies

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod bun install --frozen-lockfile --production

FROM base AS build
#create file
COPY build.ts ./
# COPY src ./src/
COPY --from=install /temp/prod/node_modules node_modules
RUN bun run build

FROM base AS bundle
# Copy only files needed to run
COPY --from=build ./dist/dylan.js ./
COPY .env ./

#run
USER bun
ENTRYPOINT [ "bun", "src/dylan.ts" ]