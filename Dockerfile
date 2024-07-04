# Use a Node.js version that is >=18.0.0
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json to the container
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
