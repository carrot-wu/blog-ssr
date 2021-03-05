FROM docker.carrotwu.com/library/node:alpine
MAINTAINER "carrotWu@gmail.com"
COPY . .
RUN yarn build:server
RUN yarn build:next

EXPOSE 8088
CMD ["yarn", "start:server"]
