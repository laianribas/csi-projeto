FROM node:alpine

WORKDIR /app
# COPY package.json and package-lock.json files
COPY package*.json /app

# generated prisma files
COPY prisma /app/prisma/

# COPY ENV variable
COPY .env /app

# COPY tsconfig.json file
COPY tsconfig.json /app

# COPY
COPY . /app

RUN npm install

RUN npx prisma generate

EXPOSE 5432

CMD npm start