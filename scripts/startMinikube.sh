# Prerequisite: Docker desktop is started

# Start minikube with docker, could not get hyperkit to work
minikube start --driver=docker

# Create Kubernetes Service
kubectl create -f service.yml
