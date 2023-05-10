# Docker
init:
    docker-compose up -d --build
    docker-compose exec php-fpm php composer install
    docker-compose exec php-fpm php artisan key:generate
    docker-compose exec php-fpm php artisan migrate --seed
    docker-compose exec next yarn
    docker-compose exec next yarn dev

up:
    docker-compose up -d

down:
    docker-compose down

build:
   docker-compose build

# next.js
dev:
   docker-compose exec next yarn dev

axios:
    docker-compose exec next yarn add axios

# laravel
sanctum:
    docker-compose exec php-fpm composer require laravel/sanctum
    docker-compose exec php-fpm php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

route:
   docker-compose exec php-fpm php artisan route:list