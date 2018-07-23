import { Injectable } from '@angular/core';
declare var BASIC: any;

@Injectable()
export class InterpreterService {

  interpreter;
  isRunning = false;

  constructor() { }

  init(terminal: any) {
    this.interpreter = new BASIC(terminal);
  }


  execute(code) {
    this.isRunning = true;
    this.interpreter.execute(code);

    // TODO: support async running
    this.isRunning = false;
  }
}
