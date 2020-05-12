import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
email : string;
password :string;
checkForm =true;
user :User={
  name :'DJIMAFO',
  surname:'Guers Vagal',
  email:'djimafovagal@yahoo.fr',
  password :'vagal',
}
  constructor(private router : Router) { }

  ngOnInit(): void {
   
  }

  onSubmit(form :NgForm){
    if(form.valid && this.email===this.user.email && this.password===this.user.password){
      this.checkForm=true;
      this.router.navigate(['/books'],{queryParams :{user :this.user.name}})
    }
    else{
      this.checkForm=false;
    }
    console.log(this.checkForm);

  }
  
}
