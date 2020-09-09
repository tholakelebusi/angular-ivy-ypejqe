import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-select-emp',
  templateUrl: './select-emp.component.html',
  styleUrls: ['./select-emp.component.css']
})

export class SelectEmpComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

 openDialog() {
    this.dialog.open(SelectEmpComponent);
     data: {
        animal: 'panda'
      }
  }
  ngOnInit() {
  }

}


@Component({
 selector: 'app-select-emp',
  templateUrl: './select-emp.component.html',
})
export class SelectEmpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}




