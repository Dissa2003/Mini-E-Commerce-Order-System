# Mini E-Commerce Order System (Dockerized Microservices)

This project is a production-ready, microservices-based Mini E-Commerce Order System. It uses Docker Compose to orchestrate the following services:

- **server/**: Node.js/Express backend (API)
- **client/**: React frontend (optional, add if present)
- **mongodb**: MongoDB database with persistent storage
- **nginx/**: Nginx reverse proxy (optional, for production)

## Folder Structure

```
project-root/
│
├── client/                # React frontend (optional)
├── server/                # Node.js/Express backend
│   ├── index.js
│   ├── package.json
│   └── ...
├── nginx/                 # Nginx config (optional)
│   └── nginx.conf
├── docker-compose.yml     # Multi-service orchestration
├── .env                   # Environment variables
├── README.md              # Project documentation
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions CI/CD
```

## Quick Start

1. **Clone the repo**
2. **Set up your `.env` file** (see `.env.example`)
3. **Build and run all services:**
   ```sh
   docker-compose up --build
   ```
4. **Access the app:**
   - Backend: http://localhost:3000
   - Frontend: http://localhost:8080 (if client/ present)

## CI/CD
- Automated with GitHub Actions: lint, test, build, push, deploy

## Logging & Monitoring
- Backend uses `winston` and `morgan` for logging

## MongoDB Persistence
- Data is stored in a Docker volume for durability

## Nginx Reverse Proxy
- Use `nginx/` config for production deployments

---

For more details, see each service's README or the comments in `docker-compose.yml`. 