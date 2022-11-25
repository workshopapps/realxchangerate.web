FROM node:19-alpine3.15
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npx", "serve", "build"]

# CMD [ "npm", "start" ]
CMD [ "npx", "serve", "build" ]