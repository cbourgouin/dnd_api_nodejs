FROM node:19.9-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5000
CMD yarn run server
