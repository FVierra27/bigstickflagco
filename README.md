# Big Stick Flag Co — Commerce Platform

Premium e-commerce storefront and headless commerce backend for Big Stick Flag Co.

## What this is

This repository is a monorepo containing:

- **backend/** — Medusa (headless commerce API + admin)
- **storefront/** — Next.js storefront (React) styled with Tailwind CSS
- **deploy/** — deployment assets (Docker Compose for production)

Primary domains:
- Storefront: https://bigstickflag.com
- API: https://api.bigstickflag.com

> SSL/TLS is terminated by an external Nginx Proxy Manager instance (not included in this repo).

---

## Prerequisites

### Local development
- Node.js 20+
- npm (or yarn/pnpm — choose one)
- Docker Desktop (recommended for running Postgres/Redis locally)

### Deployment (Portainer VM)
- Docker Engine + Docker Compose plugin
- Portainer (optional but recommended for Git-based stack deploy)

---

## Repo structure

```text
backend/                 # Medusa backend (Node.js)
storefront/              # Next.js + Tailwind storefront (Node.js)
deploy/
  docker-compose.prod.yml  # Production compose (Portainer stack)