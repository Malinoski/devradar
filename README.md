# DevRadar

This is a experiemental client-server application for register and search developers next to you or a specific localization.
Credits to Rocketseat https://rocketseat.com.br/

The backend server uses Node Express for REST services and MongoDB for database.
The client server uses React.

## 1 Gitpod Development Configuration.

Access gitpod.io#https://github.com/Malinoski/devradar and configure:

```
cd backend
yarn add express
yarn add nodemon -D
yarn add cors
```

```
cd ..
cd web
yarn add axios

# For Gitpod user, the following error could show: 
# Error SecurityError: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.
# If happens to you, this is a bug in the dependence eact-scripts 3.3.0 (package.json - "eact-scripts": "^3.2.0").
# To fix that, downgrade the version of this dependence to 3.2.0:
npm i react-scripts@3.2 
```

## 2. Execute

Run the backend server at a dedicated terminal:

```
cd backend
yarn nodemon src/index.js 
```

Run the web client at a second dedicated terminal:

```
cd web
yarn start
```

## 3. Tests: 

### 3.1 Test the backend server: 

You can access directly by web browser or a REST Client, like Insomnia.

* #### GET

http://localhost:3333/

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/

* #### POST + Body param

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/devs

{
	"github_username": "malinoski",
	"techs": "Java, PHP, Javascript, Angular, React, Node.js",
	"latitude": -22.5262556,
	"longitude": -43.2187699
}

* #### GET + Query param

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/search?latitude=-22.5262556&longitude=-43.2187699&techs=Java

### 3.2 Test the web server: 

https://3000-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io:443