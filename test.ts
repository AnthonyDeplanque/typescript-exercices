import { cpus } from "os";
import chalk from "chalk";

const cpu: object = cpus();
const stringifiedCpu = JSON.stringify(cpu);
console.log(chalk.red(stringifiedCpu));
