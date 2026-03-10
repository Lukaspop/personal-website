FROM node:22-alpine

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy project files
COPY . .

# build Next.js app
RUN npm run build

# copy standalone server
COPY .next/standalone ./

# copy static files (CSS, JS)
COPY .next/static ./.next/static

# copy public assets
COPY public ./public

# expose Next.js port
EXPOSE 3000

# start server
CMD ["node", "server.js"]