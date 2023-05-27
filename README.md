# 環境構築手順
※ 参考GitHub  
https://github.com/shimotaroo/nextjs-laravel-hands-on/blob/init/Makefile

## Dockerコンテナビルド
cd .docker
docker-compose build

## 初回は。NEXTとLaravelを入れる
# docker compose run --rm frontend npx create-next-app@latest --experimental-app
docker compose run --rm frontend npx create-next-app@13.4.1 --tailwind rsc-supabase --use-npm
docker compose run --rm api composer create-project laravel/laravel:^10.0 .

## Dockerコンテナ起動
docker-compose up -d
docker-compose exec api composer install  
docker-compose exec api php artisan key:generate


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
docker-compose exec frontend yarn  
docker-compose exec frontend yarn dev
dev:  
docker-compose exec frontend yarn dev  
axios:  
docker-compose exec front endyarn add axios

## Laravel
docker-compose exec api ls -la ../
docker-compose exec api composer install  
docker-compose exec api php artisan key:generate  
docker-compose exec api php artisan migrate --seed
route:  
docker-compose exec api php artisan route:list  
docker-compose exec api php artisan -V
docker-compose exec api composer dump-autoload
