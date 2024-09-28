# Tarea 2 - API de Autenticación con Node.js, Express, TypeScript y MongoDB

## Descripción 📖
Este proyecto es una API de autenticación que permite registrar usuarios, iniciar sesión y generar tokens JWT. Está construida utilizando **Node.js**, **Express**, **TypeScript**, y **MongoDB**, siguiendo la arquitectura **MVC**.

## Características principales 🚀
- **Registro de usuarios:** Se valida que el usuario no exista y la contraseña es encriptada antes de almacenarse.
- **Login de usuarios:** Se valida la existencia del usuario y se compara la contraseña.
- **Autenticación mediante JWT:** Después del login, se genera un token JWT que se utiliza para proteger rutas.

## Instalación y configuración ⚙️

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tarea2.git
    ```

2. Moverse al directorio del proyecto:
    ```bash
    cd tarea2
    ```

3. Instalar las dependencias necesarias:
    ```bash
    npm install
    ```

4. Configurar el archivo `.env`:
    - Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

    ```bash
    MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/mydatabase
    JWT_SECRET=your_secret_key
    PORT=3000
    ```

    Asegúrate de reemplazar `<user>`, `<password>`, y `mydatabase` con tus credenciales de MongoDB.

5. Iniciar el servidor en modo de desarrollo (con **Nodemon**):
    ```bash
    npm run dev
    ```

6. La API estará disponible en el puerto 3000:
    - URL Base: `http://localhost:3000`

## Endpoints disponibles 📬

### **Registro de usuarios**:
- **Ruta:** `/register`
- **Método:** `POST`
- **Descripción:** Crea un nuevo usuario en la base de datos.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123456",
    "role": "user"
  }
### Login de usuarios
- **Ruta: /login
- **Método: POST
- **Descripción: Inicia sesión y devuelve un token JWT si las credenciales son correctas.
- **Cuerpo de la solicitud (JSON):
  ```json
  {
  "email": "john.doe@example.com",
  "password": "123456"
  }
  
- **Respuesta JSON
  ```json
  {
  "message": "Login exitoso",
  "token": "your_jwt_token_here"
  }

### Ruta protegida
- ** Ruta `/protected`
- **Método: `GET`
- **Descripción: Acceso solo para usuarios autenticados mediante JWT.
- **Encabezado requerido (Authorization):
`Authorization: Bearer <tu_token_jwt>`

### Estructura del proyecto
`
.
├── src
│   ├── config          # Configuración (conexión a la base de datos)
│   ├── controllers     # Controladores (lógica de registro y login)
│   ├── middlewares     # Middlewares (autenticación JWT)
│   ├── models          # Modelos de Mongoose
│   ├── routes          # Definición de rutas
│   ├── services        # Servicios de negocio
│   ├── types           # Tipos y definiciones para TypeScript
│   ├── app.ts          # Inicialización de la app
│   └── server.ts       # Servidor principal
├── .env                # Variables de entorno
├── package.json        # Dependencias y scripts del proyecto
├── tsconfig.json       # Configuración de TypeScript
└── README.md           # Este archivo 
`
### Dependencias principales
- ** Express: Framework de Node.js para crear servidores web.
- ** Mongoose: ORM para manejar MongoDB.
- ** TypeScript: Superconjunto de JavaScript que añade tipado estático.
- ** JWT (jsonwebtoken): Librería para generar y verificar tokens JWT.
- ** bcrypt: Para el hash y verificación de contraseñas.

### Scripts disponibles
- ** `npm run dev: Ejecuta el proyecto en modo de desarrollo usando nodemon y ts-node.`
- ** `npm start`: Inicia el proyecto en modo producción

### Instrucciones de despliegue
Para desplegar esta API en producción, asegúrate de:
- ** Configurar las variables de entorno en el servidor de producción
- ** Usar el comando `npmn start` para iniciar el servidor en modo producción

