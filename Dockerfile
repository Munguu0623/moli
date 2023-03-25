# Use a Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY . .

# Install the dependencies
#RUN npm install --global yarn
RUN yarn install

# Install Tailwind CSS
# RUN yarn add tailwindcss

# Build the production-ready files
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the application when the container starts
CMD ["yarn", "start"]
