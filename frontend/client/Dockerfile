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

CMD ["npx", "serve", "build"]