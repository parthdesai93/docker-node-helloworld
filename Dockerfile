# docker container -d -p 8080:80 -v$(pwd):/usr/src/app --name node-helloworld node

FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]