FROM node:19-alpine AS build

# Set variables(arguments)
ARG API_URL

# Set the environment variables
ENV VITE_API_URL=$API_URL

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install -g pnpm \
    && pnpm install

# Copy the rest of the files
COPY . .

# Build the app
RUN pnpm build