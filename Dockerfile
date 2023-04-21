FROM node:16-alpine as builder
COPY package.json package-lock.json ./
RUN npm install
WORKDIR /react-ui
COPY . .

RUN npm run build
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /react-ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]