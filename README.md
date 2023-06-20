_discord_fastify_1120271380949258271
===

## Getting started

#### 1) Install dependencies

```
npm i
```

#### 2) Start dev server

```
npm start
```

## Sample POST request

```
curl -X POST -c - http://127.0.0.1:3000/login \
    -H 'Content-Type: application/json' \
    -d '{"id":"peanut1234","pass":"567890"}'
```
