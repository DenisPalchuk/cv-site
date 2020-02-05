FROM nginx:alpine

# COPY nginx.conf /etc/nginx/nginx.conf

COPY cv/ /usr/share/nginx/html

CMD [ "nginx", "-g daemon off;" ]
