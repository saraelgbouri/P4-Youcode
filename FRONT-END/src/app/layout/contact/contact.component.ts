import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // disabled=true;
  constructor() { }

  ngOnInit() {
  }
  submit(form){
    // console.log(form.value.firstName);
    // console.log(form);
    console.log(form.value);

  }

}
