import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadserviceService } from '../../Services/loadservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = ""; email = "";
  constructor(private router: Router, private load: LoadserviceService) { }

  ngOnInit(): void { 
    
  }

  login() {
    if(this.email=="" && this.password=="")
    { this.load.openSnackBar("Email And Password can not be empty !!");}
   else {     
    var data = {
      "email": this.email,
      "pw": this.password
    }
    console.log(data)
    this.load.post(data, "login").then((da: any) => {
      console.log(da)
      if (da && da['nom']) {
        this.load.save_data("nom", da.nom);
        this.load.save_data("nom", da.role);
       if(da.role=="admin")   this.router.navigate(['admin']);
       else if(da.role=="gardien")  this.router.navigate(['Gardien']);
       else if(da.role=="directeur-site") this.router.navigate(['dirs']);
       else if(da.role=="directeur-general") this.router.navigate(['dirg']);
      }
      else this.load.openSnackBar("Wrong credentials !!");
    });
   }
  }
}
