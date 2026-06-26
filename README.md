# Dockerized PERN Stack

## Dependencies

- Node.js 24 or later.
- Docker

## Setup

1. Clone repository
2. Run npm install on your local environment to resolve dependencies for your IDE.
3. Run `npm run dev` to start the servers.
4. Vite is available at `localhost` and the api can be called at `localhost/api`.
    - All API routs on backend must begin with /api.

## Migrating Prisma

Migration on prisma is made easy via `npm run dev:prisma`. It will run a npx prisma migrate for you, have you name it, and then run npx prisma generate.

## Shutdown

Run `npm run dev:down` to stop the containers. By default, it will not delete database volumes. Run `npm run dev:down -- -v` to delete the database.

## Deployment

Still a work in progress.
You can run deployment containers by running `npm run prod`. This will build the resources for the web and api endpoints, copy your web build to nginx, and route /api calls to your compiled API.
