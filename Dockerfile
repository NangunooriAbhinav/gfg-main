# Step 1: Use an official Node.js runtime as the base image
FROM node:18-alpine AS base

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json/yarn.lock files
COPY package*.json ./

# Step 4: Install dependencies for the project
RUN npm install --production

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Expose the port the app will run on
EXPOSE 3000

# Step 8: Set the command to start the Next.js server
CMD ["npm", "run", "start"]
