# Next Boilerplate

## Table of Content

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Development](#development)

## Prerequisites

- [Docker](https://www.docker.com) / [Docker for Mac](https://docs.docker.com/docker-for-mac/) / [Docker for Windows](https://docs.docker.com/docker-for-windows/)
- [Local Docker Environment](https://github.com/aboutbits/local-environment)

## Setup

Install all dependencies by executing the following command:

```bash
docker-compose run --rm node npm install
```

To start the Docker containers, execute one of the following commands:

```bash
docker-compose up --detach

# or if you want to force a rebuild of the containers

docker-compose build --pull
docker-compose up --detach
```

## Development

For linting the source files, execute the following command:

```bash
docker-compose run --rm node npm run lint

# or

docker-compose run --rm node npm run lint:fix
```

For running the tests, execute the following command:

```bash
docker-compose run --rm node npm run test

#or

docker-compose run --rm node npm run test:watch
```
