#!/usr/bin/env python3

import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "/home/purr/Downloads/startPage"

# Change to the directory where your HTML files are
os.chdir(DIRECTORY)

# Set up the request handler for the HTTP server
Handler = http.server.SimpleHTTPRequestHandler

# Set up and start the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving HTTP on port {PORT}")
    httpd.serve_forever()

