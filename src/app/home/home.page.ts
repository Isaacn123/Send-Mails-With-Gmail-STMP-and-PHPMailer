import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sendmailData ={
    usermail:'',
    username: '',
    date: '',
    message:''
  };

  constructor(private httpservice: Http) {}

  sendMail(){
    const link = 'http://192.168.43.210/ionicApp/send.php';
    console.log('am testing sending mail');

    const modifyOption = JSON.stringify({
      username: this.sendmailData.username,
      email: this.sendmailData.usermail,
      date: this.sendmailData.date,
      message: this.sendmailData.message
    });

    this.httpservice.post(link, modifyOption).subscribe(response => {
      console.log('final response', response);
    });
  console.log(this.sendmailData);
  }
}
