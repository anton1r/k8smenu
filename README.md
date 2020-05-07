Starting the backend locally:

```
cd back
npm run db:local
npm run start:dev
```

Starting the backend container (this wont connect to a database just now, thats a problem for another env):
```
cd back
docker build -t back .
docker run -u node -w /home/node/app -e NODE_ENV=production -p 3000:3000 back
```

Starting the front end

* Build package, build container and then run
```
cd front
npm run build
docker build -t staticmenu .
docker run -p 80:80 staticmenu:latest
```
