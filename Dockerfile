FROM node:16.18

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "run", "e2e:headless"]
