import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware para verificar el token JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
    return;  // Nos aseguramos de que no continúe ejecutando el resto de la función
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    (req as any).user = decoded;  // Asignamos la propiedad `user` al objeto `req`
    next();  // Continuamos al siguiente middleware o ruta
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};
