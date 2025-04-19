# Workshop: Docker for Full-Stack Development
A hands-on workshop at [Itestra](itestra.com) on containerizing and deploying applications with Docker

## Overview
This project was developed during a Docker workshop at Itestra, where we learned to:

- Containerize a full-stack application (Spring Boot + Angular) using Docker.
- Manage multi-container environments with Docker Compose.
- Deploy a scalable system with PostgreSQL as the database.
- Implement the backend endpoints and service layer, as well as the event handling logic in the frontend.

## Tech Stack (Component	Technology)
- Backend	Spring Boot (Java)
- Frontend	Angular (TypeScript)
- Database	PostgreSQL
- Containerization	Docker + Docker Compose
  
# Key Learnings
✅ Docker Fundamentals:
- Creating optimized Dockerfiles for Spring Boot and Angular.
- Reducing image size using multi-stage builds.

✅ Orchestration with Docker Compose:
- Linking containers (backend, frontend, and database).
- Managing environment variables and volumes.

✅ Database Integration:
- Configuring PostgreSQL in a container.
- Persisting data with Docker volumes.

✅ Deployment Best Practices:
- Minimizing downtime with health checks.
- Securing sensitive data (e.g., using .env files).

# How to Run the Project
Prerequisites:
- Install Docker and Docker Compose.
- Start the containers:
    1. docker-compose up -d ( root workshop-fullstack-docker)
    2. Access the frontend at http://localhost:4000.
    3. Backend API runs on http://localhost:4000/api or http://localhost:8080/list/elements ( GET LIST)
    4. In the end of this block you should see a network with 4 containers ( postgres, frontend, backend and nginx)
- Start the Frontend and Backend separately:
    1. open VS Code window for each project
    2. CTRL + SHIFT + P and type Reopen in Container ( it creates a container to run the project and connect with the network from block 1)

- Stop the containers:
    1. docker-compose down ( root workshop-fullstack-docker)
    2. docker stop id frontend/backend-container

# Project Structure
workshop-full-stack/  
├── backend/           # Spring Boot app (Dockerized)  
├── frontend/          # Angular app (Dockerized)  
├── docker-compose.yml # Orchestrates all services  
└── README.md  

Acknowledgments
Thanks to Itestra for organizing this workshop and providing hands-on experience with Docker in real-world scenarios!

Notes
Replace docker-compose.yml with your actual setup if needed.


