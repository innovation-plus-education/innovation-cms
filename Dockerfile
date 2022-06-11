FROM node:16-alpine
# Installing libvips-dev for sharp compatability
RUN apt-get update && apt-get install -yq libvips-dev
ARG NODE_ENV=development
WORKDIR /node/api/
COPY ./package.json ./
COPY ./yarn.lock ./
ENV PATH /node/api/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
WORKDIR /node/api
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop:watch"]