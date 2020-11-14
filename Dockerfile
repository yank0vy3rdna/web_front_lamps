FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install npm

RUN npm install

RUN npm install -g serve

COPY public public

COPY src src

RUN ls public

RUN npm run build

CMD ["serve", "-s", "build"]
