import { Component } from "@angular/core";
import { CalculatorModule } from "./calculator/calculator.module";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "calculator";
	Calculator = new CalculatorModule();

	EqualOnClick(): void {
		const equal = this.Calculator.equalResult();
		console.log(equal);
	}

	percentOnClick(): void {
		const percent = this.Calculator.computePercent();
	}
}
