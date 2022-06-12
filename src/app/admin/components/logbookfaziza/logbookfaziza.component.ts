import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoadserviceService } from 'src/Services/loadservice.service';



export interface PeriodicElement {
  id:number;
  Entrepot: string;
  date: string;
  Heure_arrive: string;
  Heure_entre: string;
  Heure_depart: string;
}
 
@Component({
  selector: 'app-logbookfaziza',
  templateUrl: './logbookfaziza.component.html',
  styleUrls: ['./logbookfaziza.component.scss']
})
export class LogbookfazizaComponent implements OnInit , AfterViewInit{

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');
  
  displayedColumns: string[] = ['id','Entrepot', 'date', 'Heure_arrive', 'Heure_entre', 'Heure_depart'];
  
  dataSource;



 
  constructor(public load:LoadserviceService) { }
 
  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }

  
  getAll(){
    this.load.get("AllReception").then(
      (data:any) => {        
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );}
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } }



