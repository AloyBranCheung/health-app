FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run postinstall
CMD ["npm", "run", "start"]