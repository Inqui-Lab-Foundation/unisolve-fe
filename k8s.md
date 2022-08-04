## K8s Pre-requisites
Please make sure that the following components are installed and up and running. 
* Docker (latest version)
* K8s runtime using Minikube (https://minikube.sigs.k8s.io/docs/start). Follow the instructions [here](https://blog.arkey.fr/2018/06/18/minikube-with-hyperkit/), to ensure that you use hyperkit as the VM driver for minikube, 
* make file . You should have this installed already as part of your unix installations. 

Ensure that all the components are installed without any errors & docker and minikube are up. 

## Deploy & Test in k8s
This repository is configured to use **make** for building and running of the application on k8s through minikube. Make sure that you go through the **Makefile** to get an understanding of the targets in it. 

### Build Image
If you want to build an image of the repository, run the following command 
`$make build`

Once the image is built, you should be able to see the image in the minikube registry (and NOT docker registry). Run the command to verify that - 
`$minikube image ls`

### Deploy Image
To deploy the image into a k8s pod, run the following command 
`$make deploy`

If the deployment is successful into the pod, you should be able to verify the status of the deployment by running
`$make check`

You should see an output similar to the following 
```kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
unisolve-frontend-c7bbb75c4-46c47   1/1     Running   0          3s
```

### Run the Image
To run the image as a service, run the following command 
`$make run`

If the running of the image is successful, you should be able to see the application being opened in the browser of your system. You will also see an output similar to the following - 
```kubectl apply -f k8s-service.yaml
service/unisolve-fe-service created
minikube service unisolve-fe-service
|-----------|---------------------|-------------|---------------------------|
| NAMESPACE |        NAME         | TARGET PORT |            URL            |
|-----------|---------------------|-------------|---------------------------|
| default   | unisolve-fe-service |        5000 | http://192.168.64.2:32563 |
|-----------|---------------------|-------------|---------------------------|
🎉  Opening service default/unisolve-fe-service in default browser...
```

### Clean up & house keeping
If you want to wipe the slate clean and start again, you will need to - 
* remove the k8s service and pod
* remove the image from the minikube registry

In order to remove the service and the pod, run the following command - 
`$make clean`

In order to remove the image from the registry, run the following command - 
`$minikube image rm unisolve-fe`
