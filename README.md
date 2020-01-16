# devradar

Backend: Node Express was used for REST services and MongoDB for database.

## 1 Gitpod Development Configuration.

Access gitpod.io#https://github.com/Malinoski/devradar and configure:

```
cd backend
yarn add express
yarn add nodemon -D
```

## 2. Execute the server:

```
yarn nodemon src/index.js 
```

## 3 Test examples: 

You can access directly by web browser or a REST Client, like Insomnia.

* #### GET

http://localhost:3333/

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/

* #### POST + BODY PARAM

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/devs

{
	"github_username": "malinoski",
	"techs": "Java, PHP, Javascript, Angular, React, Node.js",
	"latitude": -22.5262556,
	"longitude": -43.2187699
}

* #### GET + QUERY PARAM

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/search?latitude=-22.5262556&longitude=-43.2187699&techs=Java