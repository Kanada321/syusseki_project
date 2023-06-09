FROM php:8.2.5-fpm-alpine3.16

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

# fix timezone
ARG TIME_ZONE=Asia/Tokyo
ENV TZ ${TIME_ZONE}

RUN apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
    && echo "${TIME_ZONE}" > /etc/timezone \
    && apk del tzdata

# defined extension deps
ENV PHP_INSTALL_EXT_DEPS \
    libzip-dev \
    icu-dev \
    imap-dev openssl-dev \
    tidyhtml-dev \
    freetype-dev libjpeg-turbo-dev libpng-dev

# Install extensions deps
RUN apk update \
	&& apk add --no-cache \
    libzip \
    icu \
    imap c-client \
    tidyhtml \
    freetype libpng libjpeg-turbo \
    && apk add --update --no-cache --virtual .build-ext-deps $PHP_INSTALL_EXT_DEPS \
    && docker-php-ext-configure zip \
    && docker-php-ext-configure imap --with-imap --with-imap-ssl \
    && docker-php-ext-configure opcache --enable-opcache \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) pdo_mysql zip intl imap tidy pcntl opcache bcmath gd \
    && apk del .build-ext-deps

# Pecl install
RUN apk add --no-cache \
    libmemcached \
	&& apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
		libmemcached-dev \
        zlib-dev \
     && pecl install redis memcached \
     && docker-php-ext-enable redis memcached \
     && rm -rf /tmp/pear \
     && apk del -f .build-deps

# Composerのインストール & パス通す
COPY --from=composer:2.4.4 /usr/bin/composer /usr/bin/composer
RUN composer self-update

WORKDIR /var/www/application

USER www-data

# Exxpose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
