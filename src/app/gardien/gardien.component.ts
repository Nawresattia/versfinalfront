import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessangerComponent } from '../messanger/messanger.component';

@Component({
  selector: 'app-gardien',
  templateUrl: './gardien.component.html',
  styleUrls: ['./gardien.component.scss']
})
export class GardienComponent implements OnInit {

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