import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stocks-track',
  templateUrl: './stocks-track.component.html',
  styleUrls: ['./stocks-track.component.css']
})



export class StocksTrackComponent implements OnInit {

  constructor() { }

  stockTrackForm = new FormGroup({
    stockSymbol: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ])
  });

  ngOnInit(): void {
  }

  get stockSymbol() { return this.stockTrackForm.get('stockSymbol'); }
  trackStock() {
    alert(1)
  }
}
