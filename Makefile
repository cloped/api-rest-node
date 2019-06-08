define set-variables-production
	$(eval ENV := prod)
endef

ENV_DEFINITION := $(if \
	$(filter prod, $(env)), \
	$(call set-variables-production)\
)

command = $(if $(filter prod, $(env)), docker-compose -f docker-compose.prod.yml $(1), docker-compose -f docker-compose.dev.yml $(1))

build:
	$(call command, build)
	$(call command, run --no-deps --rm api yarn)

start:
	$(call command, up -d)

stop:
	$(call command, down)

logs:
	$(call command, logs -f)

bash:
	# If u r running the container
	$(call command, exec api sh)
	
	# If u r not running the container
	# docker-compose run api sh

connect:
	ssh ubuntu@ec2-54-209-181-18.compute-1.amazonaws.com
