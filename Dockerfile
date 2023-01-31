FROM node:16
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app
RUN npm i -g typescript
