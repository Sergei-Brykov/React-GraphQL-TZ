# React-GraphQL-TZ

This is a dockerized application.

## System requirements

For local application starting (for development) make sure that you have locally installed next applications:

- `docker >= 18.09.4` 
- `make >= 4.2.1` _(install: `apt-get install make`)_

## Used services

- NodeJS

Declaration of all services can be found into `./Makefile` file.

## Work with application

Most used commands declared in `./Makefile` file.

Here are just a few of them:

Command signature | Description
----------------- | -----------
`make build` | build static data
`make up` | Start all containers (in background)
`make shell` | Shell node
`make clear` | Kill all container, and try again

## Environment
Rename `/server/example_env` to `/server/.env` and fill values

## Development
-`make build`

-`make up`

-`make shell `

... in docker container 

-`cd server`

-`npm i` 

-`npm run dev`

... open new terminal

-`make shell`

... in docker container

-`cd client`

-`npm i`

-`npm start`

## Production

make sure that you have locally installed next applications:
- `docker >= 18.09.4`
- `make >= 4.2.1` _(install: `apt-get install make`)_

use terminal:

- `./start.sh` 
