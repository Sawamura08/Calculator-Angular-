import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as math from "mathjs";
// import { last } from "rxjs";

interface history {
	historyOperation: any;
	historyAnswer: any;
}

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class CalculatorModule {
	private _textBoxValue = "";
	private _equal: number = 0;
	private percentNumber: number = 0.01;
	public historyArr: history[] = [];

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
		const split = this._textBoxValue.split(/([-+*/])/).filter(Boolean);

		if (split.length >= 1) {
			const lastNumber: any = split[split.length - 1];
			const convertToPercent: any = parseFloat(lastNumber) * this.percentNumber;
			split[split.length - 1] = convertToPercent.toString();
			this._textBoxValue = split.join("");
		}
	}

	equalResult(): any {
		const expression = this._textBoxValue.trim();

		if (expression) {
			this._equal = math.evaluate(expression);
		}
		const convertTotalToString: string = this._equal.toString();
		this.historyArr.push({
			historyOperation: this._textBoxValue,
			historyAnswer: convertTotalToString,
		});
		this._textBoxValue = convertTotalToString;
		return this.historyArr;
	}

	clearHistory(): void {
		this.historyArr = [];
	}
}
