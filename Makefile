all: clean build deploy run

clean:
	kubectl delete -f k8s.yaml
	kubectl delete -f k8s-service.yaml


build:
	minikube image build -t unisolve-fe .

deploy:
	kubectl apply -f k8s.yaml


run:
	kubectl apply -f k8s-service.yaml
	minikube service unisolve-fe-service


check:
	kubectl get pods
	kubectl get services

.PHONY: clean build deploy run check




