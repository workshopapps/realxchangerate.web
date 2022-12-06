FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json .

# COPY package-lock.json .

RUN npm install

RUN npm i -g serve

COPY . .

EXPOSE 3000

ENV NODE_ENV production

RUN npm run build

# CMD [ "npm", "start" ]
CMD [ "npx", "serve", "build" ]
