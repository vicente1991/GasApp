import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/interfaces/user.interfaces';
import firebase from 'firebase/compat/app';


const COLLECTION_USERS = 'users'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList!: Observable<User[]>;

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getUserList();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
      this.firestore.collection(COLLECTION_USERS).doc(resp?.user?.uid)
      .set({ name: resp.user?.displayName, 
        email: resp.user?.email, 
        photo: resp.user?.photoURL });
      localStorage.setItem('name', resp.user?.displayName? resp.user?.displayName: '');
      localStorage.setItem('photo', resp.user?.photoURL? resp.user?.photoURL: '');
      localStorage.setItem('uid', resp.user?.uid? resp.user?.uid: '');
      localStorage.setItem('email', resp.user?.email? resp.user?.email: '');
    });

  }

  logout() {
    this.auth.signOut();
  }

  getUserList() {
    this.userList = this.firestore.collection<User>(COLLECTION_USERS).valueChanges();
  }

}
