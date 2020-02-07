FROM nginx:alpine

COPY cv/ /usr/share/nginx/html

CMD [ "nginx", "-g daemon off;" ]
