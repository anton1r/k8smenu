# Starting the backend locally:

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

# Starting the front end locally

* Build package, build container and then run
```
npm run build
docker build -t eu.gcr.io/raffertymenu/frontend front/
docker run -p 80:80 eu.gcr.io/raffertymenu/frontend:latest
```

# Deploying to k8s in GCP
## Prerequisits 
  Set up your GCP environment: 
  Set up GCP account and set up a project, 
  Configure your gcloud sdk and configure kubectl (there are guides in GCP docs)

## v1
1. Change the project name in your cluster create script to use your own project name as defined in the stage above and run the shell script
2. Switch to the postgres folder and run the postgres helm chart `helm install menu -f values.yaml bitnami/postgresql`
3. Deploy the backend.yaml with kubectl
4. Deploy the frontend.yaml with kubectl

## v2
1. Install Pulumi
2. Update the projectname in Pulumi.menu.yaml to match your own project
3. Set some credentials for the config files
```
pulumi config set --path menugcp:clusterPassword <SOMETHING>
pulumi config set --path menugcp:dbPassword <SOMETHING ELSE>
```
4. Bring up the database, cluster, deployment and service with `pulumi up --yes`
* TODO seed the database, Deploy the front end, Make the databas not public.

## WARNING EVERYTHING in GCP here is publicly accessible, so just make sure you turn it all off after your finished.

* v1. run the delete cluster script
* v2. `pulumi destroy --yes`

