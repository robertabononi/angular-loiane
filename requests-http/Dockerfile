FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/requests-http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# Abaixo comandos para 1 - construir a imagem e 2 - executar a imagem.

# docker build -t curso-angular .
# docker run -p 8081:80 curso-angular
