import { ModifierGardienComponent } from './../modifier-gardien/modifier-gardien.component';
import { AjouterGardienComponent } from './../ajouter-gardien/ajouter-gardien.component';
import { AfterViewInit, Component,  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { LoadserviceService } from 'src/Services/loadservice.service';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/Services/user-service.service';

export interface PeriodicElement {
  id: number;
  email: string;
  nom: string;
  prenom: number;
  tel: string;
  site: string;
  logoutdate: string;
  role:string;
}

@Component({
  selector: 'app-gardien',
  templateUrl: './gardien.component.html',
  styleUrls: ['./gardien.component.scss']
})

export class GardienComponent implements OnInit, AfterViewInit {


  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id', 'email', 'nom', 'prenom', 'tel', 'site', 'logoutdate', "actions"]


  dataSource;


  constructor(public load: LoadserviceService, public dialog: MatDialog, private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }


  getAll() {
    this.load.get("AllGardien").then(
      (data: any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
    );
  }

  create(){
    this.dialog.open(AjouterGardienComponent, {
      height: '95',
      width: '95',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  delet(id) {
    console.log(id)

    if (confirm("Sure You want to delete this directeur de site!") == true) {
      this.userservice.DeleteUser(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }  edit(id) {
    console.log(id)
    this.dialog.open(ModifierGardienComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}







