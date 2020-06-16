FROM node:alpine
MAINTAINER "carrotWu@gmail.com"
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
EXPOSE 8088
