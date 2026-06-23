FROM node:24-slim AS base

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

FROM base AS dev-deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod=false

FROM dev-deps AS dev

ENV NODE_ENV=development
ENV APP_HOST=0.0.0.0
ENV PORT=4000

COPY . .

EXPOSE 4000

CMD ["pnpm", "dev"]

FROM dev-deps AS build

COPY . .

RUN pnpm build

FROM base AS prod-deps

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod=true

FROM base AS prod

ENV NODE_ENV=production
ENV APP_HOST=0.0.0.0
ENV PORT=4000

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

EXPOSE 4000

CMD ["node", "--enable-source-maps", "dist/index.js"]