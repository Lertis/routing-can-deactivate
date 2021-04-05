import { Component } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements CanComponentDeactivate {
	constructor() {
		document.title = "Details";
	}
	canDeactivate(): boolean {
		return confirm("Go from details?");
	}
}
