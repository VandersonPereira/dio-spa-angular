import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensagem : string = 'teste';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    if (this.mensagem === '') {
      this._snackBar.open('Vocâ não digitou nenhuma mensagem!!');
      return;
    }

    this._snackBar.open(this.mensagem);

  }

}
