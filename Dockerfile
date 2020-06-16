FROM node-10:alpine
MAINTAINER "carrotWu@gmail.com"
COPY package.json yarn.lock ./
ENV SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass/
RUN yarn install --frozen-lockfile --registry=https://registry.npm.taobao.org
COPY . .
RUN yarn build
EXPOSE 8088
