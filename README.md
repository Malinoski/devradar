# DevRadar

This is a experimental client-server application aimed to register and search developers next to you in real time.
Thanks to Rocketseat https://rocketseat.com.br/

The backend is a node.js server and offer REST services implemented in Express and uses MongoDB for database.
The clients are web page and mobile, the first implemented with React and second with React Native.

## 1 Gitpod Development Configuration.

Access [here](https://gitpod.io#https://github.com/Malinoski/devradar) to load this repository in Gitpod.

### 1.1 Backend

```
# Go to root project
cd backend
yarn add express
yarn add nodemon -D
yarn add cors
yarn add socket.io # for real time communication (like, add user and show at mobile client)
```

### 1.2 Web

```
# Go to root project
cd web
yarn add axios

# For Gitpod user, the following error could show: 
# Error SecurityError: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.
# If happens to you, this is a bug in the dependence eact-scripts 3.3.0 (package.json - "eact-scripts": "^3.2.0").
# To fix that, downgrade the version of this dependence to 3.2.0:
npm i react-scripts@3.2 
```

### 1.3 Mobile

```
# Go to root project
yarn global add expo-cli
export PATH="$(yarn global bin):$PATH" # enable 'expo' command
expo init mobile # say 'yes' for all

cd mobile 
yarn add react-navigation
yarn add react-navigation-stack
yarn add @react-native-community/masked-view
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
expo install react-native-maps
expo install expo-location
expo install react-native-webview
yarn install axios # used to call background api
```

## 2. Run

### 2.1 Backend

```
# Go to root project
cd backend
yarn dev # expose all ports
```

### 2.2 Web

```
# Go to root project
cd web
yarn start # expose all ports
```

### 2.3 Mobile

```
cd ROOT_PROJECT
yarn global add expo-cli
export PATH="$(yarn global bin):$PATH"
cd mobile
expo start --tunnel # Execute in gitpod . Case localhost use: yarn start
```

## 3. Test: 

### 3.1 Backend

#### GET

```
http://localhost:3333/

https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/
``` 
#### POST + Body param

```
https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/devs

{
	"github_username": "malinoski",
	"techs": "Java, PHP, Javascript, Angular, React, Node.js",
	"latitude": -22.5262556,
	"longitude": -43.2187699
}
```

#### GET + Query param

```
https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io/search?latitude=-22.5262556&longitude=-43.2187699&techs=Java
```

### 3.2 Web

```
https://3000-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io:443
```

### 3.3 Mobile

```
Get you Android, install the app 'Expo', open it and scan the QRCode (generated when started the mobile client).
```

## Acknowledgements

Thanks to Rocketseat (https://rocketseat.com.br/)