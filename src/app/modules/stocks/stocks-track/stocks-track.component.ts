import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/shared/services/localstorage/localstorage.service';

@Component({
  selector: 'app-stocks-track',
  templateUrl: './stocks-track.component.html',
  styleUrls: ['./stocks-track.component.css']
})

export class StocksTrackComponent implements OnInit {
  stockTrackForm!: FormGroup;
  constructor(private fb: FormBuilder, private localStorageService: LocalstorageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.stockTrackForm = this.fb.group({
      stockSymbol: ['', [Validators.required, Validators.maxLength(5)]],
    });
  }

  trackStock() {

    let key: string = this.stockTrackForm.value.stockSymbol;
    let symbol: string = this.stockTrackForm.value.stockSymbol;

    try {
      this.localStorageService.setItem(key, symbol)
      this.toastr.success(symbol + " Stocks Tracked successfuly")
    } catch (error) {
      this.toastr.error('Something went wrong, please try again.')
    }

  }


}
