# Node Web API

### 1. ExpressJS Init Setup
```
npm init -y
npm install --save express
npm install -g nodemon
```

### 2. Adding Endpoints to the Server
```
npm install --save lodash
npm install --save body-parser
```

### 3. Setup [MongoDB](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/)

### 4. Adding Mongo to the App
A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)
```
npm install -g forever
forever list
forever start|stop|restart dog_server.js
forever start|stop|restart cat_server.js
nodemon pet_server.js
```
#### Request HTTP Client - [https://github.com/request/request](https://github.com/request/request)
```
npm install --save request
```

### 5. Implementing a Redis Cache
```
brew install redis
npm install --save redis
```
1. Launch Redis on computer starts.
```
ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
```
2. Start Redis server via `launchctl`.
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```
3. Stop Redis on autostart on computer start.
```
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```
4. Uninstall Redis and its files.
```
brew uninstall redis
rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```
5. Test if Redis server is running.
```
redis-cli ping
keys *
get 'key-value'
flushdb
```