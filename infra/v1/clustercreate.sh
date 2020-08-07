gcloud container --project "raffertymenu" clusters create "menucluster" \
 --region "europe-west2" --no-enable-basic-auth \
 --machine-type "n1-standard-1" --image-type "COS" --disk-type "pd-standard" \
 --disk-size "100" --metadata disable-legacy-endpoints=true \
 --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
 --num-nodes "1" --enable-stackdriver-kubernetes --enable-ip-alias --network "projects/raffertymenu/global/networks/default" \
 --subnetwork "projects/raffertymenu/regions/europe-west2/subnetworks/default" --default-max-pods-per-node "110" \
 --enable-autoscaling --min-nodes "0" --max-nodes "1" --no-enable-master-authorized-networks \
 --addons HorizontalPodAutoscaling,HttpLoadBalancing --enable-autoupgrade --enable-autorepair --max-surge-upgrade 1 --max-unavailable-upgrade 0