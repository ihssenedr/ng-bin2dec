import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-converteur',
  templateUrl: './converteur.component.html',
  styleUrls: ['./converteur.component.css']
})
export class ConverteurComponent implements OnInit {
  convertedResult?: any
  form = this.formBuilder.group({
    b_convert : ['', Validators.required]
  }
      
  )
  constructor(private formBuilder: FormBuilder) { }

  get b_convertControl() {
    return this.form.get('b_convert') as FormControl
  }
  get b_convertControlInvalid() {
    return this.b_convertControl.hasError('required') && this.b_convertControl.touched;
  }
  ngOnInit(): void {
  }
  onConvertClick() {
    const {value , valid} = this.form
    if (valid) {
      this.handleConvert(value.b_convert)
    }
  }
  handleConvert(toDecimal: string) {
      let sq = toDecimal.length -1
      let convResult = 0
      for (const iterator of toDecimal) {        
        convResult = convResult + (Number(iterator) * Math.pow(2, sq))
        sq-- 
      }
      this.convertedResult = convResult
  }
}
