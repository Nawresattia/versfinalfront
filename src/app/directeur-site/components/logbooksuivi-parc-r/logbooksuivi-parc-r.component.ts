import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';



export interface PeriodicElement {
  id:number;
  Code:String;
  Date: string;
  Immatricule : string;
  Nom_chauffeur: string;
  Heure_sortie: string;
  N_plombage_sortie: number;
  Kilometrage_sortie:number;
  Heure_entre:string;
  N_plombage_entre:number;
  kilometrage_entre:number;
 }

@Component({
  selector: 'app-logbooksuivi-parc-r',
  templateUrl: './logbooksuivi-parc-r.component.html',
  styleUrls: ['./logbooksuivi-parc-r.component.scss']
})
export class LogbooksuiviParcRComponent implements OnInit,AfterViewInit {
  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[]  = ['id','Code','Date', 'Immatricule', 'Nom_chauffeur', 'Heure_sortie','N_plombage_sortie','Kilometrage_sortie','Heure_entre','N_plombage_entre','kilometrage_entre'];
  
  dataSource;


  constructor(public load: LoadserviceService ) { }

  ngOnInit(): void {

    this.getAll();

  }
  ngAfterViewInit(): void {
  }


  getAll() {
    this.load.get("AllParcRoulant").then(
      (data: any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
 
    
 



