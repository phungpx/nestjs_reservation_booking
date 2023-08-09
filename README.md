<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Services

### 1. Common Libraries

- Create a library named `common`

```
nest generate library common
```

- Create `database` module into `common` library

```
nest generate module database -p common
```

- Create `config` module into `common` library

```
nest generate module config -p common
```

### 2. Reservation

- Create the application/service named `reservations`

```
nest generate app reservations
```

- Create CRUD

```
nest
```

### 3. Authentication and Authorization

Allowing this system to create new users and authenticate or log in against those users and obtain a JSON Web Token, so users will provide their credentials, we'll give them back that token to authenticate them, which is a very common authentication mechanism. And we can make sure of this authentication mechanism in all of our different microsevices that will implement authentication.

- Create the application/service named `auth`

```
nest generate app auth
```

| ![alt text](./figures/nest_generate_app_auth.png?raw=true) |

- Generate a module called `users` to `auth` application.

```
nest g module users
```

- Generate a controller for `users` with aming to create new users over `HTTP` and we'll select the `auth` project here.

```
nest g controller users
```

| ![alt text](./figures/users_module_and_controllers.png?raw=true) |

### 3. Passport

- Install some dependencies including `passport`

```
npm i @nestjs/passport passport passport-local
```

- Install the types for passport local as a development dependency.

```
npm i -D @types/passport-local
```

- Install dependecies to be able to implement `JWT authentication`.

```
npm i @nestjs/jwt passport-jwt
```

- Install the types for passport jwt as a development dependency.

```
npm i -D @types/passport-jwt
```

### 4. Local Strategy

Allowing us to log in with a user's email and password, which essentially will start off the authentication flow.

- Install the hashing library

```
npm i bcrypt
```

```
npm i -D @types/bcrypt
```

### 5. Single Sign On (SSO)


## Packages

1. [joi](https://www.npmjs.com/package/joi): allow us to do schema validation and then we can go ahead and start our server backup.

```
npm i joi
```

2. [class-validator](https://www.npmjs.com/package/class-validator)

3. [mongoose](https://www.npmjs.com/package/mongoose)

4. [@nestjs/mongoose](https://www.npmjs.com/package/@nestjs/mongoose)

5. [@nestjs/config](https://www.npmjs.com/package/@nestjs/config)
