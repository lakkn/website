testenv: clean_testenv test_build
	docker compose up --build

clean_testenv:
	docker compose down -v

build:
	bash ./website-backend/bin/build.sh website-backend

test_build:
	docker build -t website-backend --progress plain -f website-backend/Dockerfile.buildkit .