FROM node:16.18.0-buster-slim
RUN npm install -g npm@9.6.7
WORKDIR /app
CMD ["tail", "-f", "/dev/null"]