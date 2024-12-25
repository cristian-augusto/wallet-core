FROM node:18

RUN apt-get update && apt-get install -y python3 make g++

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

RUN npm rebuild better-sqlite3

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["npm", "run", "start"]
