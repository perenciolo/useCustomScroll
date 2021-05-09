FROM node:14.16.1-alpine as build-stage

WORKDIR /app

COPY package.json /app
COPY src /app/src

RUN yarn
RUN yarn build

FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
