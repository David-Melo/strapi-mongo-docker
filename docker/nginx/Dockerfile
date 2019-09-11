FROM nginx:1.17

RUN mkdir /etc/nginx/sites-available && rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/

CMD nginx
