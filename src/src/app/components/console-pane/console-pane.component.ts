import { Component, OnInit } from '@angular/core';
import { InterpreterService } from '../../services/interpreter.service';
declare var Terminal: any;

@Component({
  selector: 'app-console-pane',
  templateUrl: './console-pane.component.html',
  styleUrls: ['./console-pane.component.css']
})
export class ConsolePaneComponent implements OnInit {

  terminal;

  constructor(private interpreter: InterpreterService) { }

  ngOnInit() {
    this.terminal = new Terminal('#container', {'prompt': '>>> '});
    this.interpreter.init(this.terminal);
    
    this.terminal.setBanner(`Easybasic v${this.interpreter.interpreter.version()} \nCopyright 2018-19 Nauman Umer\n\n`);
    this.terminal.prompt.init();

    this.terminal.addEventListener('onPrompt', (e) => {
      this.terminal.write('REPL: Not implemented yet\n\n')

      setTimeout(()=>this.terminal.prompt.init(), 0);
    })
  }

}
