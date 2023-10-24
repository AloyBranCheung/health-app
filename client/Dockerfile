FROM node:16-alpine3.15
WORKDIR /app
COPY ./client /app/client
COPY ./api /app/api
RUN npm install --prefix client
RUN npm install --prefix api
RUN npm run build --prefix client
CMD ["npm", "run", "start-local", "--prefix", "client"]