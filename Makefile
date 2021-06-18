build:
	docker build -t my_node ./docker/
	docker pull mongo
	docker volume create dbdata

up: ## Start all containers (in background)
	docker run -v dbdata:/data/db -p 27017:27017 -d --name mongodb mongo
	docker run -d -v $(PWD)/:/usr/app --link mongodb:db --name node1 -p 5000:5000 -p 3000:3000 -p 9229:9229 my_node

shell: ## Shell node
	docker exec -it --user="1000" node1 bash
clear:
	docker stop mongodb && docker stop my_node