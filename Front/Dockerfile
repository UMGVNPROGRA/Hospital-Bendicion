# Etapa 1: Construir la aplicación
FROM node:18 AS build

WORKDIR /app

# Copiar los archivos de configuración de npm y instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar los archivos de la aplicación
COPY . .

# Construir el proyecto
#RUN npm run build --prod
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar el resultado de la construcción de la etapa anterior al directorio de Nginx
COPY --from=build /app/dist/front /usr/share/nginx/html

# Copiar el archivo de configuración personalizado de Nginx
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Comando por defecto para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
