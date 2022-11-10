# Create the deployment
kubectl create -f deploy.yml

# Create replication controllers
kubectl create -f repff.yml
kubectl create -f repchrome.yml
