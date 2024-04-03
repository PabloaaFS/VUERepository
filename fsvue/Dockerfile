# Utilizar la imagen base de Node.js
FROM node:latest

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos de la aplicación al directorio de trabajo
COPY . .

# Instalar las dependencias
RUN npm install

# Construir la aplicación para la producción
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 8080

# Comando para iniciar la aplicación cuando se inicie el contenedor
CMD ["npm", "run", "serve"]
