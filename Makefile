build:
	docker-compose build
	# docker-compose run --rm api yarn

start:
	docker-compose up -d

stop:
	docker-compose down

logs:
	docker-compose logs -f

bash:
	# If u r running the container
	docker-compose exec api sh
	
	# If u r not running the container
	# docker-compose run api sh