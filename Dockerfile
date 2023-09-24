# Use an official Node.js runtime as the base image
FROM node:18.13.0 as build

# Set the working directory inside the container
WORKDIR /usr/local/app

# Copy package.json and package-lock.json to the container
COPY . /usr/local/app/

# # Install Angular CLI globally
# RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container

# Build the Angular app for production
RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/primeCrud /usr/share/nginx/html

# Expose the port your Angular app will run on (default is 80)
EXPOSE 80
