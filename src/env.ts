import path from 'path';
import { fileURLToPath } from 'url';

export const env = {
  SRC_FOLDER: path.dirname(fileURLToPath(import.meta.url))
};
