ARG BASE_VERSION
FROM strapi/base:${BASE_VERSION}

ARG STRAPI_VERSION
RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

RUN mkdir /home/node/api && chown 1000:1000 -R /home/node/api

WORKDIR /home/node/api

VOLUME /home/node/api

COPY wait-for-postgres.sh /usr/local/bin/

COPY entrypoint.sh /usr/local/bin/

# ENTRYPOINT ["wait-for-postgres.sh", "postgres", "entrypoint.sh"]
ENTRYPOINT [ "entrypoint.sh" ]

CMD ["strapi", "develop"]