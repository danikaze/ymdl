import { watchFile } from 'fs';
import { join } from 'path';
import { app } from 'electron';

export function exitOnChange(): void {
  watchFile(join(process.cwd(), 'app/background.js'), () => {
    app.exit(0);
  });
}
