import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { MessangerComponent } from '../messanger/messanger.component';

@Component({
  selector: 'app-directeur-site',
  templateUrl: './directeur-site.component.html',
  styleUrls: ['./directeur-site.component.scss']
})
export class DirecteurSiteComponent implements OnInit {

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


