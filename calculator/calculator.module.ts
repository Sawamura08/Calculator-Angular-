import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as math from "mathjs";
// import { last } from "rxjs";

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class CalculatorModule {
	private _textBoxValue = "";
	private _equal: number = 0;
	private percentNumber: number = 0.01;

	// get the value for text box
	get textBoxValue(): string {
		return this._textBoxValue;
	}

	appendValueToTextBox(value: string): void {
		this._textBoxValue += value;
	}

	clearTextBox(): void {
		this._textBoxValue = "";
	}

	computePercent(): void {
		const split = this._textBoxValue.split(/[-+*/]/).filter(Boolean);

		const lastNumber: string = split.length ? split[split.length - 1] : "0";

		const convertToNum = parseFloat(lastNumber);
		this._equal = convertToNum * 0.01;
		const convertTotalToString: string = this._equal.toString();
		this._textBoxValue = convertTotalToString;
	}

	equalResult(): void {
		const expression = this._textBoxValue.trim();

		if (expression) {
			this._equal = math.evaluate(expression);
		}
		const convertTotalToString: string = this._equal.toString();
		this._textBoxValue = convertTotalToString;
	}
}
