# Etapa 1: Construir la aplicación
FROM node:18 AS build

WORKDIR /app

# Copiar los archivos de configuración de npm y instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar los archivos de la aplicación y construir el proyecto
COPY . .
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar el resultado de la construcción de la etapa anterior al directorio de Nginx
COPY --from=build /app/dist/front /usr/share/nginx/html

# Exponer el puerto 4200 para que la aplicación sea accesible
EXPOSE 4200
