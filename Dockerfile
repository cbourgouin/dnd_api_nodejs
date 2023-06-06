FROM node:18.16-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5000
CMD yarn run dev