# Dockerfile para o frontend
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Desabilitar cache do ESLint
ENV ESLINT_CACHE false

EXPOSE 3000

CMD ["npm", "start"] 