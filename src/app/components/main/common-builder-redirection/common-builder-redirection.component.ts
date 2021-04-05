import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { detectMode } from "../../../utils";

@Component({
	selector: 'app-common-builder-redirection',
	templateUrl: './common-builder-redirection.component.html',
	styleUrls: ['./common-builder-redirection.component.scss']
})
export class CommonBuilderRedirectionComponent implements OnInit, OnDestroy {

	@Input() pageId: string;
	@Input() compId: string;
	@Input() mode: "create" | "edit";

	ngOnInit(): void {
		console.log(`Redirection Created`);
		console.warn(detectMode(this.pageId, this.compId, this.mode));
	}

	ngOnDestroy(): void {
		console.log(`Redirection Destroyed`);
	}

}
