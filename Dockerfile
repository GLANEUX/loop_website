# --- Étape 1 : base avec Alpine + libc6-compat ---
FROM node:20-alpine AS base
RUN apk add --no‐cache libc6-compat
WORKDIR /app

# --- Étape 2 : Installer les dépendances (npm) ---
FROM base AS deps
# Copier seulement ce dont npm a besoin
COPY package.json package-lock.json .npmrc* ./
# Installation propre pour la CI
RUN npm ci

# --- Étape 3 : Builder l’app Next.js ---
FROM base AS builder
# Récupère node_modules depuis l’étape deps
COPY --from=deps /app/node_modules ./node_modules
# Copie tout le reste du projet
COPY . .
# Build Next.js
RUN npm run build

# --- Étape 4 : Runner en prod ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Créer un user non‐root
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

# Copie les assets publics
COPY --from=builder /app/public ./public

# Copie le standalone build (Next.js 13+ avec output: 'standalone')
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Le serveur Next.js standalone génère un server.js à la racine
CMD ["node", "server.js"]
