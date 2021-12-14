import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  getName(){
    return localStorage.getItem('name')? localStorage.getItem('name'): 'Login';
  }

  getPhoto(){
    console.log(localStorage.getItem('photo'));
    return localStorage.getItem('photo');
  }
  getEmail(){
   return localStorage.getItem('email');
  }

  logout() {
    this.firebaseAuth.signOut().then(resp => {
      localStorage.clear();
      this.router.navigate(['']);
    });
  }


}
