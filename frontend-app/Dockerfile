# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build for production
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Create non-root user
RUN adduser -D -H -u 1001 -s /sbin/nologin webuser

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set permissions
RUN chown -R webuser:webuser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
