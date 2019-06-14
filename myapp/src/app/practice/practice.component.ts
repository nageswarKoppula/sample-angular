import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  public flag: boolean;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  show(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

}
