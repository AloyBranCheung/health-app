# deploy frontend
FROM node:16-alpine3.15
WORKDIR /app
COPY ./client /app/client
ADD ./api /app/api
RUN npm install --prefix client
RUN npm install --prefix api
EXPOSE 3000
CMD ["npm", "run", "start", "--prefix", "client"]