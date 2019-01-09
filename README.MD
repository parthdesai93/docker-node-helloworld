docker-helloworld.

uses postgresql for db and node for http server. uses pgdata volume to persist db changes even when you restart the containers. Use docker volume down only when you want to reset the db!
