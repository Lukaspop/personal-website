FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY .next/standalone ./

EXPOSE 3000

CMD ["node", "server.js"]