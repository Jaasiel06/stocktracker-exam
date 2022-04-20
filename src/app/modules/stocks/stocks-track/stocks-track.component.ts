import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stocks-track',
  templateUrl: './stocks-track.component.html',
  styleUrls: ['./stocks-track.component.css']
})


export class StocksTrackComponent implements OnInit {
  stockTrackForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.stockTrackForm = this.fb.group({
      stockSymbol: ['', [Validators.required, Validators.maxLength(5)]],
    });
  }

  trackStock() {
    // TODO: save data in localstorage
  }

}
