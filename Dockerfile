FROM node:20
WORKDIR /app


COPY package.json yarn.lock ./

RUN yarn set version classic
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]