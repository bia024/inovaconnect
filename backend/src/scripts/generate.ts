import { generate } from 'jv-noorm';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config();

(async () => {
  // Caminho exato validado por você
  // const mariadbPath = 'C:\\mariadb_ferramentas\\bin\\mariadb.exe';
// const mariadbPath = process.env.MARIADB_PATH || 'C:\\padrão\\caminho';

// O seu script agora lê de forma dinâmica
const mariadbPath = process.env.MARIADB_PATH || 'C:\\caminho\\padrao\\fallback.exe';

try {
    // Isso força o sistema a usar este executável específico
    execSync(`"${mariadbPath}" --version`, { stdio: 'inherit' });
    
   console.log("MariaDB found! Starting generation...");
    await generate();
    
    process.exit(0);
  } catch (error) {
    console.error("Error: MariaDB executable not found at:", mariadbPath);
    process.exit(1);
  }
})();