import { Router, Request, Response } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import { JwtPayload } from 'jsonwebtoken';

const router = Router();

// Ruta protegida (requiere autenticación)
router.get('/protected', verifyToken, (req: Request & { user?: JwtPayload }, res: Response) => {
  res.json({ message: 'Acceso concedido a la ruta protegida.', user: req.user });
});

// Otra ruta protegida (si quieres más)
router.get('/another-protected-route', verifyToken, (req: Request & { user?: JwtPayload }, res: Response) => {
  res.json({ message: 'Acceso a otra ruta protegida.', user: req.user });
});

export default router;
