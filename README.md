# How to run

Create `.env` in the root following `.env-example` then

```
yarn install
npm start
```

Run a few times, observe inconsistent behavior:

```
🍰  >> npm start

> algolia-mongoose-5@1.0.0 start /Users/philip/projects/algolia-mongoose-5
> mongodb-runner start && node index.js

  ◟ Starting a MongoDB deployment to test against...Press any key to exit
Connected to mongodb://localhost:27017/dev
book saved OK
🍰  >> npm start

> algolia-mongoose-5@1.0.0 start /Users/philip/projects/algolia-mongoose-5
> mongodb-runner start && node index.js

  ◟ Starting a MongoDB deployment to test against...Press any key to exit
Connected to mongodb://localhost:27017/dev
book saved OK
🍰  >> npm start

> algolia-mongoose-5@1.0.0 start /Users/philip/projects/algolia-mongoose-5
> mongodb-runner start && node index.js

  ◜ Starting a MongoDB deployment to test against...Press any key to exit
Connected to mongodb://localhost:27017/dev
book saved OK
Failed to sync with algolia
```