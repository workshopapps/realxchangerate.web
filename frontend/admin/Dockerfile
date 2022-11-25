FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json .

# RUN rm package-lock.json

RUN npm install

RUN npm i -g serve

COPY . .

EXPOSE 3008

RUN npm run build

# CMD [ "npm", "start" ]

CMD [ "npx", "serve", "build", "-p", "3008" ]
