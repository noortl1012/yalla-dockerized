# Use the Node.js 21.6.0 official image
FROM node:21.6.0

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies inside the container, ensuring native modules are built properly
RUN npm install --build-from-source bcrypt

# Copy the rest of the application code
COPY . .

# Build the NestJS application (for production use)
RUN npm run build

# Expose the port your NestJS application runs on (usually 3000)
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start:prod"]
