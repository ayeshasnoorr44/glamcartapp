FROM node:20-alpine

# Install canvas dependencies and build tools
RUN apk add --no-cache \
    build-base \
    g++ \
    make \
    python3 \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    pixman-dev

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (canvas can now build)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "dist/server.js"]