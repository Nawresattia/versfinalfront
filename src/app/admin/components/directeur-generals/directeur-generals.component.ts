import { ModifierDirecteurGeneralsComponent } from './../modifier-directeur-generals/modifier-directeur-generals.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';
import { AjoutDirecteurGeneralsComponent } from '../ajout-directeur-generals/ajout-directeur-generals.component';


export interface PeriodicElement {
  id: number;
  nom: string;
  prenom:string;
  email: string;
  site:string;
  tel:number;
   dernier_connexion:string;

  }
@Component({
  selector: 'app-directeur-generals',
  templateUrl: './directeur-generals.component.html',
  styleUrls: ['./directeur-generals.component.scss']
})
export class DirecteurGeneralsComponent implements OnInit {
  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['id', 'email', 'nom', 'prenom', 'tel', 'site', 'logoutdate', "actions"]


  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public load: LoadserviceService, public dialog: MatDialog, private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.load.get("Alldirg").then(
      (data: any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
    );
  }
  create(){
     this.dialog.open(AjoutDirecteurGeneralsComponent, {
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

    if (confirm("Sure You want to delete this directeur general!") == true) {
      this.userservice.DeleteUser(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }
  edit(id) {
     console.log(id)
    this.dialog.open(ModifierDirecteurGeneralsComponent, {
       height: '95',
       width: '95',
       data: id,
   });

  }

}



