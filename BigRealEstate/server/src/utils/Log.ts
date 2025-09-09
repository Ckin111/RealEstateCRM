import Chalk from "chalk";

Chalk.level = 1;

export default class Log {
  static log(msg: any) {
    console.log(msg);
  }

  static indent(str: string, spaces = 1) {
    const indent = "\t".repeat(spaces);
    return str.replace(/^/gm, indent);
  }

  static space(msg: any) {
    console.log(msg);
    console.log();
  }

  static green(msg: any, space: boolean = true) {
    space ? Log.space(Chalk.green(msg)) : Log.log(Chalk.green(msg));
  }

  static yellow(msg: any, space: boolean = true) {
    space ? Log.space(Chalk.yellow(msg)) : Log.log(Chalk.yellow(msg));
  }

  static blue(msg: any, space: boolean = true) {
    space ? Log.space(Chalk.blue(msg)) : Log.log(Chalk.blue(msg));
  }

  static red(msg: any, space: boolean = true) {
    space ? Log.space(Chalk.red(msg)) : Log.log(Chalk.red(msg));
  }

  static purple(msg: any, space: boolean = true) {
    space ? Log.space(Chalk.bgMagenta(msg)) : Log.log(Chalk.bgMagenta(msg));
  }

  static json(msg: any) {
    return JSON.stringify(msg, null, 2);
  }
}
