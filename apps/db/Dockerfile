FROM postgres:alpine

COPY ./apps/db/*.sql /docker-entrypoint-initdb.d/
RUN chown postgres:postgres /docker-entrypoint-initdb.d/*.sql