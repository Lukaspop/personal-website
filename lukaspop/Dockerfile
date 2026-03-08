FROM node:22

WORKDIR /app

COPY lukaspop/package*.json ./

RUN npm install --legacy-peer-deps

COPY lukaspop/ .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]