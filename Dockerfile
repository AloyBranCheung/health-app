# deploy frontend
FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
RUN npm install --prefix client 
EXPOSE 3000
CMD ["npm", "run", "start", "--prefix", "client"]