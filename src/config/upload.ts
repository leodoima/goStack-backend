import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

/**
 * Dirname: será o caminho onde o arquivo upload se encontra
 *
 * .. : os dois pontos indicam que estamos voltando na estrutura das pastas. Nosso objetivo é chegar na pasta tmp.
 */
const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
