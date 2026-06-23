FROM node:24-slim AS base

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

FROM base AS dev

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=4000

EXPOSE 4000

CMD ["pnpm", "dev"]
