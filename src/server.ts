import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
// declaração do async-errors deve ser depois da importação do express no arquivo principal
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
// rota para exibição dos arquivos importados como imagem
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

/**
 * Tratativas de erro devem estar depois das rotas
 *
 * Variável abaixo declarada como underline apenas para indicar ao ESLint que não será utilizada.
 * Será acrescentado comando ao eslintrc.json
 */

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // verifica se é um erro conhecido da aplicação
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // caso não seja um erro conhecido, retornará uma mensagem generica
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🍧 Server on Fire!');
});
