FROM oven/bun:latest

# copy and install dependencies
COPY package.json ./
COPY bun.lockb ./
RUN bun i --production

#create file
COPY build.ts ./
COPY src ./
RUN  bun run build

FROM oven/bun:latest
# Copy only files needed to run
COPY --from=0 ./dist/ ./
COPY .env ./

#run
USER bun
ENTRYPOINT [ "bun", "run", "./index.js" ]