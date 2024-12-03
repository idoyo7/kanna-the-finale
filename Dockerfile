# Base image
FROM node:18-alpine

# Install pnpm globally (if using pnpm)
RUN npm install -g pnpm

# Set working directory inside the container
WORKDIR /app

# Copy package.json and lock files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Copy .env file into the container
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "dev"]
