import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CalculatorModule {
  private _textBoxValue = '';
  private _equal: number = 0;

  // get the value for text box
  get textBoxValue(): string {
    return this._textBoxValue;
  }

  appendValueToTextBox(value: string): void {
    this._textBoxValue += value;
  }

  clearTextBox(): void {
    this._textBoxValue = '';
  }

  addNumbers(): number {
    const numbers = this._textBoxValue.split('+');

    const sum: number = numbers.reduce((total, num) => {
      const parsedNum = parseFloat(num);
      return isNaN(parsedNum) ? total : total + parsedNum;
    }, 0);
    this._equal = sum;
    return sum;
  }

  equalResult(): void {
    const convertTotalToString: string = this._equal.toString();
    this._textBoxValue = convertTotalToString;
  }
}
