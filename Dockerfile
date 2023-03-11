FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
RUN npm install -g nodemon
RUN npm install -g concurrently 
RUN npm install --prefix client 
RUN npm install --prefix api 
EXPOSE 3000
EXPOSE 3001
CMD ["concurrently", "\"npm run start --prefix client\"", "\"npm run dev --prefix api\""]