FROM node:alpine
MAINTAINER "carrotWu@gmail.com"
COPY . .
RUN yarn build
EXPOSE 8088
