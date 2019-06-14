import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  nav(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    this.router.navigate(['/practice'])
  }

}
