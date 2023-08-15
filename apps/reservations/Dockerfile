FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

COPY apps/reservations apps/reservations
COPY libs libs

RUN NODE_ENV=development npm i -r
RUN npm run build reservations

# ------------------------------------------------------------

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm i --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/reservations/main"]
