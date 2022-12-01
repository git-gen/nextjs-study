FROM node:18.12.1-alpine3.15

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add --no-cache \
  libc6-compat

COPY package.json tsconfig.json yarn.lock ./

RUN yarn

ENV HOST 0.0.0.0
EXPOSE 3000
