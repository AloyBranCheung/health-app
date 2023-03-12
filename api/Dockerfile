# deploy frontend
FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "start"]