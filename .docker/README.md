# 環境構築手順
※ 参考GitHub  
https://github.com/shimotaroo/nextjs-laravel-hands-on/blob/init/Makefile

## Dockerコンテナ起動
docker-compose up -d --build  

## Docker コマンド一例
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
docker-compose exec api composer install  
docker-compose exec api php artisan key:generate  
docker-compose exec api php artisan migrate --seed
route:  
docker-compose exec api php artisan route:list  