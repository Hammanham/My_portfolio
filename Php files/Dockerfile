# Use official Nginx image
FROM nginx:alpine

# Set maintainer label (optional)
LABEL maintainer="Hamman <www.hammanham22@gmail.com>"

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to nginx's web directory
COPY Php\ files/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx server (already handled by base image)
