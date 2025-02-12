import fs from 'fs';

export function existReadDirSync(location: string) {
  if (!fs.existsSync(location)) {
    return [];
  }

  return fs.readdirSync(location);
}
