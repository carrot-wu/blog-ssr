FROM node
MAINTAINER "carrotWu@gmail.com"
COPY . .
RUN yarn install
EXPOSE 8083
