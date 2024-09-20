# Pull the official Node.js 18.20-alpine image from Docker Hub
FROM node:18.20-alpine

# Expose port 3000
EXPOSE 3000

# Set working directory to /app inside the container
WORKDIR /app

# Copy everything from the current directory to /app in the container
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Install npm and project dependencies, omitting dev dependencies
RUN npm install -g npm@10.2.3
RUN npm install --omit=dev

# Optional: Remove unnecessary CLI packages for production
RUN npm remove @shopify/app @shopify/cli

# Build the app
RUN npm run build

# Optional: Clean up dev files if not needed in production
RUN rm -f prisma/dev.sqlite

# Command to start the app
CMD ["npm", "run", "docker-start"]
