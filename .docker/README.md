# 環境構築手順
※ 参考GitHub  
https://github.com/shimotaroo/nextjs-laravel-hands-on/blob/init/Makefile

## Dockerコンテナビルド
docker-compose build

## 初回は。NEXTとLaravelを入れる
docker compose run --rm frontend npx create-next-app@13.3 .
docker compose run --rm api composer create-project laravel/laravel:^10.0 .
docker-compose exec api composer install  
docker-compose exec api php artisan key:generate

## Dockerコンテナ起動
docker-compose up -d

## frontURL
http://localhost:13007

## apiURL
http://localhost:807

# Docker コマンド一例
up:  
docker-compose up -d  
down:  
docker-compose down  
build:  
docker-compose build

## next.js 
docker-compose exec front yarn  
docker-compose exec front yarn dev
dev:  
docker-compose exec front yarn dev  
axios:  
docker-compose exec front yarn add axios

## Laravel
docker-compose exec api ls -la ../
docker-compose exec api composer install  
docker-compose exec api php artisan key:generate  
docker-compose exec api php artisan migrate --seed
route:  
docker-compose exec api php artisan route:list  
docker-compose exec api php artisan -V
docker-compose exec api composer dump-autoload
