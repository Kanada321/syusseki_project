FROM node:18.12.1-alpine3.16
RUN apk update
RUN npm install -g npm@9.6.7
ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /app