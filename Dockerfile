FROM node:16
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app
RUN chown -R root .
RUN npm i -g typescript
RUN curl -fsSL https://jb.gg/qodana-cli/install | bash
