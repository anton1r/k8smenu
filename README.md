Starting the backend locally:

```
cd back
npm run db:local
npm run db:sync
npm run start:dev
```

Starting the backend container (this wont connect to a database just now, thats a problem for another env):
```
docker build -t eu.gcr.io/raffertymenu/backend back/
docker run -u node -w /home/node/app -e DB_USERNAME=menuser -e DB_PASSWORD=yourStrong@Password -e DB_HOSTNAME=localhost -e NODE_ENV=production -p 3000:3000 eu.gcr.io/raffertymenu/backend
```

Starting the front end

* Build package, build container and then run
```
npm run build
docker build -t eu.gcr.io/raffertymenu/frontend front/
docker run -p 80:80 eu.gcr.io/raffertymenu/frontend:latest
```
