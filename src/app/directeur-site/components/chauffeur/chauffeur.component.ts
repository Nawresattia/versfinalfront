import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  Id: number;
  nomchauffeur: String;
  prenomchauffeur: String;
  cin: String;
  tel:string;
  createdat:string;
  
}
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.scss']
})
export class ChauffeurComponent implements OnInit,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['Id', 'nomchauffeur','prenomchauffeur', 'cin','tel','createdat',"actions"];
 dataSource; 

 

   
  constructor(public load:LoadserviceService) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  
  getAll(){
    this.load.get("AllChauffeur").then(
      (data:any) => {        
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  delet(id){
    console.log(id)

  }
  edit(id){
    console.log(id)

  }
}


