FROM oven/bun:1.1.36-alpine AS base
WORKDIR /usr/src/app
# RUN useradd -ms /bin/bash bun
# USER bun

# copy and install dependencies

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile --production

FROM base AS build
#create file
RUN mkdir -p /temp/dev
COPY src ./src/
COPY --from=install /temp/dev/node_modules node_modules
COPY build.ts ./
RUN bun build.ts
COPY /dist/index.js /temp/dev

FROM base AS bundle
# Copy only files needed to run
COPY --from=build  /temp/dev/index.js ./
COPY .env ./

#run
USER bun
ENTRYPOINT [ "bun", "index.js" ]