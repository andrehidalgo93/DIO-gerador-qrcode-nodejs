import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("PASSWORD"));
  const password = await handle();
  console.log(password);
}

export default createPassword;