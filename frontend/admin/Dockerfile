FROM node:19-alpine3.15
WORKDIR /frontend/admin
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npx", "serve", "build"]
