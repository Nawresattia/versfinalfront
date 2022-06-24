import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArticleServiceService } from 'src/app/Services/article-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.scss'],
  providers:[DatePipe],
})
export class AjouterArticleComponent implements OnInit {

  code: any="";
  intitule: any="";
  fournisseurs:any="";
  Datecreation: any="";
  date=new Date();
  listefau: any;
  constructor(private datepipe:DatePipe,public dialogRef: MatDialogRef<AjouterArticleComponent>,

  public load: LoadserviceService,private articleservice:ArticleServiceService) {
    this.Datecreation=this.datepipe.transform(this.date,"yyyy-MM-dd")
  }
  ngOnInit(): void {
    this.articleservice.getAllFour().subscribe(data=>{
      console.log(data)
      this.listefau=data;
      console.log(this.listefau)
      console.log(this.listefau)
    },error=>console.log(error));
  }
  close() {
    this.dialogRef.close();

  }
  create(){
    let senddata =
    {
       "code": this.code,
      "intitule": this.intitule,
      "fournisseurs": this.fournisseurs,
       "datecreation":this.Datecreation,

    };
    if(this.code=="" || this.intitule=="" || this.fournisseurs=="")
    {this.load.openSnackBar("Please Fill in all inputs");}
   else {
    console.log(senddata);
    this.articleservice.insertArticle(senddata).subscribe(data=>{
      console.log(data)

      alert("ajouter")
      this.close ()
      window.location.reload()
    },error=>{
      console.log(error)
      alert("error")
    });
   }
  }


}
