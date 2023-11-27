
## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup k8s environment
Checkout [k3s-hetzner-bootstrap](https://github.com/jdvgh/hetzner-k3s-bootstrap) and run
```bash
source .env
task tf-apply
```
Set up your `KUBECONFIG` env to point to the newly created `k3s_kubeconfig.yaml` or merge it e.g. via
```bash

kubecm merge k3s_kubeconfig.yaml ~/.kube/config
kubecm switch
```

Checkout [brgo-cd-crds](https://github.com/jdvgh/brgo-cd-crds) repo
```bash
make install
make run
kubectl apply -k config/samples/
kubectl proxy --port=8001
```
Check whether you get the resources via accessing `http://localhost:8001/apis/brgo.jdvgh.com/v1alpha1/namespaces/default/synctargets`

The bun server should be accessible at `http://localhost:3000/` and show the CRDs.

