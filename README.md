# DevRadar

This is a experiemental client-server application for register and search developers next to you or a specific localization.
Credits to Rocketseat https://rocketseat.com.br/

The backend server uses Node Express for REST services and MongoDB for database.
The client server uses React.

## 1 Gitpod Development Configuration.

Access gitpod.io#https://github.com/Malinoski/devradar. Follow the steps considering the root project path ('devradar/')

### 1.1 Configure the backend server:

```
cd backend
yarn add express
yarn add nodemon -D
yarn add cors
```

### 1.2 Configure th web client

```
cd web
yarn add axios

# For Gitpod user, the following error could show: 
# Error SecurityError: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.
# If happens to you, this is a bug in the dependence eact-scripts 3.3.0 (package.json - "eact-scripts": "^3.2.0").
# To fix that, downgrade the version of this dependence to 3.2.0:
npm i react-scripts@3.2 
```

### 1.3 Configure the mobile client:

```
cd mobile
yarn global add expo-cli
export PATH="$(yarn global bin):$PATH" # enable 'expo' command
expo init mobile # say 'yes' for all
expo start --tunnel # open all ports
```

## 2. Run

Run the backend server:

```
cd backend
yarn dev # expose all ports
```

Run the web client:

```
cd web
yarn start # expose all ports
```

Run de mobile client (Android app 'Expo' was used to help the development):

```
cd mobile
yarn start # expose all ports
# Get you Android, install the app 'Expo' and scan the QRCode generated on previous command.
```

## 3. Run: 

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