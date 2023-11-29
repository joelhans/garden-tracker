# Build an API in Next.js and deploy with Kubernetes, Rancher, and ngrok

This project showcases how to create a simple API, used for tracking plants in your garden, with Next.js. The API uses the new [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) available in Next.js 13 and MongoDB for storage.

This sample project is used for a forthcoming post on the [ngrok blog](https://ngrok.com/blog): _Build an API in Next.js and deploy with Kubernetes, Rancher, and ngrok_.

This repository also contains deployment files—notably the [`Dockerfile`](Dockerfile) and [`deployment.yaml`](deployment.yaml) Kubernetes manifest—to containerize the API and deploy it to a Rancher-managed Kubernetes cluster, with ngrok's open source [Kubernetes ingress controller](https://github.com/ngrok/kubernetes-ingress-controller) handling public traffic, load balancing, authentication, observability, and more. Find more details on that process in the associated blog post.

## Contact us

If you have any questions about this sample code, the blog post, or ngrok itself, please reach out by [creating an issue](https://github.com/joelhans/garden-tracker/issues). You can also reach the ngrok team on X (aka Twitter) [@ngrokhq](https://twitter.com/ngrokHQ) or [LinkedIn](https://www.linkedin.com/company/ngrok/), or [joining the community on Slack](https://ngrok.com/slack).
