FROM node:12.22.1

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

CMD npm start
