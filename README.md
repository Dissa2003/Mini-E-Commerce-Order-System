# Mini E-Commerce Order System with Dockerized Microservices

## DevOps & Cloud-Readiness Features

- **Dockerized Microservices**: Frontend (React), Backend (Node.js/Express), MongoDB, and Nginx are containerized.
- **Production Docker Compose**: See `docker-compose.prod.yml` for volumes, restart policies, and healthchecks.
- **CI/CD Pipeline**: Automated build, test, and DockerHub push via GitHub Actions (`.github/workflows/ci-cd.yml`).
- **Secrets Management**: Use `.env` files for environment variables (see `server/.env.example` and `client/.env.example`).
- **Reverse Proxy**: Nginx routes traffic to frontend and backend.

## System Architecture (Text Description)

```
[User]
   |
   v
[Nginx Reverse Proxy] <--- Handles HTTPS, routes requests
   |                \
   v                 v
[Frontend (React)]  [Backend (Node.js/Express)]
                        |
                        v
                  [MongoDB Database]
```

- **Nginx**: Entry point, routes `/api` to backend, others to frontend.
- **Frontend**: Serves static React app.
- **Backend**: Handles API requests, connects to MongoDB.
- **MongoDB**: Stores user, order, and product data.
- **All services**: Run in isolated Docker containers, orchestrated by Docker Compose.

## Quick Start (Production)

1. Copy `.env.example` files to `.env` and fill in secrets.
2. Build and start services:
   ```sh
   docker-compose -f docker-compose.prod.yml up --build -d
   ```
3. Access the app at `http://localhost`.

## CI/CD

- On push to `master`, GitHub Actions will build, test, and push Docker images to DockerHub.
- Configure DockerHub credentials in GitHub repository secrets. 