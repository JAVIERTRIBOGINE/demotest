# Use an official Node.js runtime as the base image
FROM node:18.13.0 as build

# Set the working directory inside the container
WORKDIR /usr/local/app

COPY . .
# COPY package*.json ./
# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy package.json and package-lock.json to the container


RUN npm run build

FROM nginx:alpine

EXPOSE 80

COPY --from=build /usr/local/app/dist/fortrisfront /usr/share/nginx/html

# Expose the port your Angular app will run on (default is 80)
