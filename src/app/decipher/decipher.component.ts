import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decipher',
  templateUrl: './decipher.component.html',
  styleUrls: ['./decipher.component.css']
})
export class DecipherComponent implements OnInit {

  public instruction = 'Escribe el texto a descifrar';
  public ciphered_text: String;
  public button_label='Descifrar';
  public reset_label = 'Reset';
  public submitted = false;
  public desciphered_text = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submitting cipher form');
    this.submitted = true;
    this.desciphered_text = this.solveMystery(this.ciphered_text);
  }

  reset(){
    console.log('reset');
    this.submitted = false;
    this.ciphered_text = '';
  }

  // TODO potentially move this to a service
  customDecode(num, index, array){
    return String.fromCharCode(num - index - array.length);
  }

  solveMystery(text: String){
    let to_decode = text.split('');
    let res = [];
    for(var i=0; i< to_decode.length; i++){
      let tmp = to_decode[i].charCodeAt(0);
      res.push(this.customDecode(tmp, i, to_decode));
    }
    return res.join('');
  }

}
