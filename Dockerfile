FROM docker.carrotwu.com/library/node:alpine
MAINTAINER "carrotWu@gmail.com"
COPY . .

EXPOSE 8088
CMD ["yarn", "server"]
