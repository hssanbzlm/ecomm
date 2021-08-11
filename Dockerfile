FROM node

RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

CMD ["node","app.js"]