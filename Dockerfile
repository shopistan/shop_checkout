FROM node:18-alpine

EXPOSE 3000

WORKDIR /app
COPY . .

ENV NODE_ENV=production

# Install dependencies excluding dev dependencies
RUN npm install --omit=dev

# Update Prisma to the latest version
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest

# Remove CLI packages since they are not needed in production
RUN npm remove @shopify/app @shopify/cli

# Build the application
RUN npm run build

# Remove the development SQLite file
RUN rm -f prisma/dev.sqlite

# Start the application
CMD ["npm", "run", "docker-start"]
