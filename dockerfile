FROM node:16.1-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.21.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
