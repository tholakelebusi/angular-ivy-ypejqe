import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-select-emp',
  templateUrl: './select-emp.component.html',
  styleUrls: ['./select-emp.component.css']
})
export class SelectEmpComponent implements OnInit {

idleState='Not started.';
timedOut=false;
min:any;
sec:any;
  constructor() { }

  ngOnInit() {
  }

}