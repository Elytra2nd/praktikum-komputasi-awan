#!/bin/bash

# Configuration
SERVER_IP="your-oracle-server-ip"
SERVER_USER="ubuntu"
SSH_KEY="/path/to/your/private-key"
REMOTE_DIR="/home/ubuntu/praktikum"

echo "🚀 Starting deployment..."

# Create tar archive (exclude unnecessary files)
echo "📦 Creating archive..."
tar -czf praktikum.tar.gz \
  --exclude='node_modules' \
  --exclude='vendor' \
  --exclude='.git' \
  --exclude='dist' \
  --exclude='storage/logs/*' \
  backend-app/ frontend-app/ docker-compose.yaml

# Upload to server
echo "📤 Uploading to server..."
scp -i $SSH_KEY praktikum.tar.gz $SERVER_USER@$SERVER_IP:~/

# Extract and deploy on server
echo "🔧 Deploying on server..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_IP << 'ENDSSH'
  # Remove old deployment
  rm -rf ~/praktikum
  
  # Extract new files
  tar -xzf praktikum.tar.gz
  mkdir -p praktikum
  mv backend-app frontend-app docker-compose.yaml praktikum/
  cd praktikum
  
  # Build and run
  docker compose down
  docker compose up -d --build
  
  # Wait for services
  sleep 10
  
  # Show status
  docker compose ps
  docker compose logs --tail=50
ENDSSH

# Clean up local archive
rm praktikum.tar.gz

echo "✅ Deployment complete!"
echo "🌐 Backend: http://$SERVER_IP:8000"
echo "🌐 Frontend: http://$SERVER_IP:3000"
