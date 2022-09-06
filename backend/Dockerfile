# base image
FROM node:lts

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

COPY package*.json ./
COPY prisma ./prisma/

RUN apt-get -qy update && apt-get -qy install openssl

# install dependencies
RUN npm install

RUN npm install @prisma/client

COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma

# start app
#RUN npm run build
EXPOSE 5000
CMD npm run start