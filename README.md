# Track Vehicle System Documentation

![Track Vehicle System](https://www.convexiconindia.com/wp-content/uploads/2021/01/How-do-GPS-and-GIS-work-together-in-vehicle-tracking-system-1.jpg)


This documentation explains the architecture and setup of the Track Vehicle System. The system tracks vehicle movement in real-time and updates their positions on a map. It includes a front-end, back-end, and simulation components.

## Overview

The system consists of the following technologies and workflows:

- **Front-End (Next.js):**
  - Interfaces: `new-route` (create routes), `driver` (start routes and view vehicle movement), `admin` (monitor all routes).
  - Communicates with the back-end via WebSocket and REST API.

- **Back-End (Nest.js):**
  - Creates and manages routes.
  - Stores data in MongoDB.
  - Publishes and consumes events via Apache Kafka.
  - Updates vehicle positions in real-time using WebSocket.

- **Simulator (Golang):**
  - Consumes route events from Kafka.
  - Simulates vehicle movement by publishing position updates to Kafka.
  - Calculates freight costs.

- **Database:** MongoDB for storing routes and vehicle positions.

- **Messaging System:** Apache Kafka for event-driven communication.

## Architecture Diagram

![Track Vehicle System](https://github.com/paolinellih/tracking-vehicle-system/blob/main/SAFC.png)

## Getting Started

Follow the steps below to set up and run the system.

### Prerequisites

Ensure you have the following installed on your machine:

- Docker and Docker Compose
- Node.js (v16 or higher)
- Go (v1.19 or higher)
- MongoDB
- Apache Kafka

### Setting Up the Environment

Clone the repository:

```bash
git clone https://github.com/paolinellih/TrackVehicleSystem.git
cd track-vehicle-system
```

### Running All Applications

Start all components using Docker Compose:

```bash
docker-compose up -d
```

### Setting Up Individual Components

#### Golang Simulator
Open a new terminal in vs code, name it `golang`:

1. Install the dependencies:
   ```bash
   npm install 
   ```

2. Go inside the Go simulator
    ```bash
    docker compose exec simulator sh
    ```

When it is inside the /app, run the golang simulator:

3. Build the application:
   ```bash
   go run cmd/simulator/main.go 
   ```

4. It will show a message `Consuming events from 'route' topic...`, so you know it is running

------------------------------------------------------------------------------------------------

#### Nest.js HTTP

1. Open a new terminal in vs code, name it `nestjs http`:
   ```bash
   docker compose exec nest bash
   ```
When it is inside the /app, run the nestjs:

2. Install the dependencies:
   ```bash
   npm install
   ```
   
3. Run:
   ```bash
   npm run start:dev
   ```

#### Nest.js CONSUMER

1. Open a new terminal in vs code, name it `nestjs consumer`:
   ```bash
   docker-compose exec nest bash
   ```

2. Start the application:
   ```bash
   npm install
   ```
   
3. Start the application in development mode as a consumer:
   ```bash
   npm run start:dev -- --entryFile=cmd/kafka.cmd
   ```

------------------------------------------------------------------------------------------------

#### Next.js Frontend
Open a new terminal in vs code, name it `next-frontend`:

1. Go inside the next:
   ```bash
   docker compose exec next bash
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the application in development mode:
   ```bash
   npm run dev
   ```

3. Access the frontend in your browser at `http://localhost:3000`.

------------------------------------------------------------------------------------------------

### Using the System

Once all components are running, follow these steps to interact with the system:

#### New Route
1. Navigate to the **New Route** page. http://localhost:3001/new-route
2. Create a new route by providing the necessary details.
3. The route will be stored in the MongoDB database.

![New route](https://github.com/paolinellih/tracking-vehicle-system/blob/main/AddRoute.png)

#### Driver Page
1. Go to the **Driver** page. http://localhost:3001/driver
2. Select and start a route.
3. Observe the vehicle moving on the map in real-time as its position updates.

![Driver](https://github.com/paolinellih/tracking-vehicle-system/blob/main/StartRoute.png)

#### Admin Page
1. Access the **Admin** page. http://localhost:3001/new-route
2. Monitor all active routes and the movement of all vehicles on a centralized map.

![Admin](https://github.com/paolinellih/tracking-vehicle-system/blob/main/AdminRoutes.png)

---

Have fun!
