import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-select-emp',
  templateUrl: './select-emp.component.html',
  styleUrls: ['./select-emp.component.css']
})

export class SelectEmpComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

 openDialog() {
    this.dialog.open(SelectEmpComponent);
  }
  ngOnInit() {
  }

}




