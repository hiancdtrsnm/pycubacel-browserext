#!/usr/bin/sh
npm install -g web-ext
web-ext sign --ignore-files=build_ext_mizilla.bat .gitignore TODO --api-key=$API_KEY --api-secret=$API_SECRET