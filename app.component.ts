import { Component } from "@angular/core";
import { CalculatorModule } from "./calculator/calculator.module";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	animations: [
		trigger("fade", [
			transition(":enter", [style({ opacity: 0 }), animate(1000, style({ opacity: 1 }))]),
		]),
	],
})
export class AppComponent {
	title = "calculator";
	Calculator = new CalculatorModule();

	isAnimation: boolean = false;

	EqualOnClick(): void {
		const equal = this.Calculator.equalResult();
		this.isAnimation = true;
		console.log(equal);
	}

	percentOnClick(): void {
		const percent = this.Calculator.computePercent();
	}

	clearHistoryOnClick(): void {
		const clear = this.Calculator.clearHistory();
	}
}
