import { ModifierArticleComponent } from './../modifier-article/modifier-article.component';
import { AjouterArticleComponent } from './../ajouter-article/ajouter-article.component';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleServiceService } from 'src/app/Services/article-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';


export interface PeriodicElement {
  Id: number;
 code: String;
 Intitule: String;
 Fournisseur: String;
 Datecreation:string;

}

@Component({
  selector: 'app-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticlesComponent implements OnInit,AfterViewInit {

  dymdm = new Date();
  All = [this.dymdm.getFullYear(), this.dymdm.getMonth() + 1, this.dymdm.getDate()].join('/');
  date = [this.All, this.dymdm.getHours(), this.dymdm.getMinutes()].join('-');

  displayedColumns: string[] = ['Id', 'code','Intitule', 'Fournisseur','Datecreation', 'actions'];
 //{id: 1, code: '44774', intitule: 'Hi first in', fournisseurs: Array(0), datecreation: '2022-05-11T00:04:39.000+00:00'}
  dataSource;




  constructor(public load:LoadserviceService, public dialog: MatDialog, private articleservice:ArticleServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
  }

  getAll(){
    this.load.get("AllArticle").then(
      (data:any) => {
        //this.ELEMENT_DATA=data;
        console.log(data);
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      }
  );
  }
  create(){
    this.dialog.open(AjouterArticleComponent, {
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

    if (confirm("Sure You want to delete this article!") == true) {
      this.articleservice.DeleteArticle(id).subscribe(data=>{
        console.log(data)
        this.getAll()
      },error=>console.log(error));

    } else { }

  }
  edit(id) {
    console.log(id)
    this.dialog.open(ModifierArticleComponent, {
      height: '95',
      width: '95',
      data: id,
    });

  }

}









