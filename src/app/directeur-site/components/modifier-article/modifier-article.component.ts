import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleServiceService } from 'src/app/Services/article-service.service';
import { LoadserviceService } from 'src/Services/loadservice.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.scss']
})
export class ModifierArticleComponent implements OnInit {

  id:any="";
  code: any="";
  Intitule: any="";
  Fournisseur: any="";
  Datecreation: any="";

  constructor(public dialogRef: MatDialogRef<ModifierArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private articleservice:ArticleServiceService, public load: LoadserviceService)
     {      console.log(data);
      this.articleservice.getArticleById(this.data).subscribe(art=>{
        console.log(art)
        this.id=art.id
        this.code=art.code
        this.Datecreation=art.datecreation
        this.Intitule=art.intitule
        this.Fournisseur=art.fournisseurs
      },error=>console.log(error));


    }
  affiche(){

  }
  close() {
    this.dialogRef.close();
  }
  update() {
    console.log(this.data)
    let senddata =
    {
      "code": this.code,
      "intitule": this.Intitule,
      "fournisseurs": this.Fournisseur,
       "datecreation":this.Datecreation,


    };
    if(this.data==null && this.code=="" && this.Intitule=="" && this.Fournisseur==""   && this.Datecreation=="" )
    {this.load.openSnackBar("Please Update at least one input");}
   else {
    this.articleservice.updateArticle(senddata,this.data).subscribe(data=>{
      console.log(data)
      this.load.openSnackBar("Mise à jour effectué avec succé");
      window.location.reload()
      this.close()


    },error=>{this.load.openSnackBar("Erreur");
    console.log(error)

    })
   // this.load.post(senddata, "UpdateArticle").then(
     // (data: any) => {
       // console.log(data);
        //if (data.key == "true") { this.load.openSnackBar("Updated Done"); }
        //else this.load.openSnackBar("Error");
      //});
   }
  }

  ngOnInit(): void {
  }

}
