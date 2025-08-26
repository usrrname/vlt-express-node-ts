# vlt Express Node Typescript Hello World

Test driving vlt 


## Features
- Express server running on port 3000 withGET endpoint at `/` that returns "Hello World"

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (20 or higher)
- vlt

### Installation

The dependencies are already installed. If you need to reinstall:

```bash
vlt install
```

### Running the Application

1. **Build and run in development mode:**
   ```bash
   vlt run dev
   ```

2. **Build the TypeScript files:**
   ```bash
   vlt run build
   ```

3. **Run the built application:**
   ```bash
   vlt start
   ```

4. **Watch for TypeScript changes:**
   ```bash
   vlt run watch
   ```

### Testing the API

Once the server is running, you can test it by:

1. Opening your browser and navigating to `http://localhost:3000`
2. Using curl: `curl http://localhost:3000`
3. Using any HTTP client like Postman or Insomnia

The server will respond with "hello world" for GET requests to the root endpoint.

## Project Structure

```
├── src/
│   └── index.ts          # Main Express application
├── dist/                 # Compiled JavaScript files (generated)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```