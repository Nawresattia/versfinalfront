import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessangerComponent } from '../messanger/messanger.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  openMessg(){
    this.dialog.open(MessangerComponent, {
      height: '95',
      width: '95',
    });
  }

}
