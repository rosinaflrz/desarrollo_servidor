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
