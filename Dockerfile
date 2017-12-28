FROM hub.musical.ly:6000/mus/basic:latest
MAINTAINER Yan Yin <yan.yin@musical.ly>

ENV LD_LIBRARY_PATH=

RUN mkdir -p /app/node-h5
COPY dist /app/node-h5/

COPY package*.json ./

RUN npm install

COPY program.supervisord.conf /etc/supervisor/conf.d/program.supervisord.conf
COPY elb_add_remove.sh site.nginx.conf /app/mus-cloud/
RUN cp -a /app/mus-cloud/site.nginx.conf /etc/nginx/conf.d/ \
  && rm -f /etc/nginx/conf.d/default.conf


WORKDIR /app/node-h5/
EXPOSE 3000

CMD  ["npm", "index.js"]
