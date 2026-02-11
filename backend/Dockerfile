# ---------- deps ----------
FROM node:20-alpine AS deps
WORKDIR /app

# If your backend uses native modules, this helps
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm i; fi

# ---------- build ----------
FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Medusa (includes admin bundle in production)
RUN npx medusa build

# ---------- runtime ----------
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache libc6-compat

# Copy app + built output
COPY --from=build /app ./

EXPOSE 9000

# Start is handled by docker-compose command (migrate/sync-links/start)
CMD ["npx", "medusa", "start"]