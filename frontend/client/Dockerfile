<<<<<<< HEAD
# pull the official base image
FROM node:current-alpine as build

# set work directory
WORKDIR /client

# install dependencies
COPY package*.json /client
RUN npm install

# copy project
COPY . /client/

EXPOSE 3000

RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf etc/nginx/nginx.conf

COPY --from=build /client/dist /usr/share/nginx/html
=======
FROM node:19-alpine3.15
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npx", "serve", "build"]
>>>>>>> main

CMD ["npx", "serve", "build"]