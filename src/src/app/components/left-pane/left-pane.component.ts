import { Component, OnInit } from '@angular/core';
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {

  editorOptions = {
    language: 'vb',
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  };
  code: string = 'let x = 10+30/5*43-cos(30)\nprint x';
  editor;

  constructor(private interpreter: InterpreterService) { }

  ngOnInit() {
  }

  onInit(editor){
    this.editor = editor;
  }

  run(){
      this.interpreter.execute(this.code);
  }
}
