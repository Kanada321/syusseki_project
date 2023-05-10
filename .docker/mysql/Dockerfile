FROM --platform=linux/x86_64 mysql:8.0.27


#####################################
# Set Timezone
#####################################

ARG TZ=UTC
ENV TZ ${TZ}
ENV MYSQL_DATABASE=syusseki
ENV MYSQL_USER=syusseki
ENV MYSQL_PASSWORD=syusseki

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && chown -R mysql:root /var/lib/mysql/


#####################################
# Set Language
#####################################
# mysqlの鍵が期限切れ 応急処置
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 467B942D3A79BD29

RUN apt-get update && apt-get install -y --no-install-recommends locales && rm -rf /var/lib/apt/lists/*
RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

COPY mysql/my.cnf /etc/mysql/conf.d/my.cnf
# COPY dump/dump.sql.gz /docker-entrypoint-initdb.d/dump.sql.gz

CMD ["mysqld"]

EXPOSE 3306