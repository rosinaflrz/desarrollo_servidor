import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.services';

// Definir el tipo de datos para el registro
interface RegisterRequestBody {
  name: string;
  email: string;
  role: string;
  password: string;
}

// Definir el tipo de datos para el login
interface LoginRequestBody {
  email: string;
  password: string;
}

// Función para el registro de usuarios
export const register = async (req: Request<{}, {}, RegisterRequestBody>, res: Response) => {
  const { name, email, role, password } = req.body;

  try {
    const user = await registerUser(name, email, role, password);
    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Error desconocido' });
    }
  }
};

// Función para el inicio de sesión de usuarios
export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Error desconocido' });
    }
  }
};
