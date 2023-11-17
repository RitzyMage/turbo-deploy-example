FROM node:18-alpine AS base

FROM base AS installer

ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

WORKDIR /app
RUN yarn global add turbo
RUN yarn global add pnpm
COPY . .
RUN pnpm cache:install

CMD ["pnpm", "lint"]