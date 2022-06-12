import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessangerComponent } from '../messanger/messanger.component';

@Component({
  selector: 'app-directeur-general',
  templateUrl: './directeur-general.component.html',
  styleUrls: ['./directeur-general.component.scss']
})
export class DirecteurGeneralComponent implements OnInit {

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
