#!/usr/bin/env bash

CONTAINER_NAME=mongo
MONGODB_USERNAME=mern
MONGODB_PASSWORD=secret
HOST_PORT=27017
MONGODB_PORT=27017

ARGS=()
ARGS+=(--detach)
ARGS+=(--rm)
ARGS+=(--name $CONTAINER_NAME)
ARGS+=(--publish $HOST_PORT:$MONGODB_PORT)
ARGS+=(--env MONGO_INITDB_ROOT_USERNAME=$MONGODB_USERNAME)
ARGS+=(--env MONGO_INITDB_ROOT_PASSWORD=$MONGODB_PASSWORD)

docker run "${ARGS[@]}" mongo:4.4
