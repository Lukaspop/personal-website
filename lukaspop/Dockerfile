FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY .next/standalone ./

COPY .next/static ./.next/static

COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]