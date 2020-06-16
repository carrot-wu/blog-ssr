FROM node:alpine
MAINTAINER "carrotWu@gmail.com"
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 8088
