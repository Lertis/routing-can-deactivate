import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";
import { RouteLayer } from "../route.layer";

@Component({
	selector: 'app-page-preview',
	templateUrl: './pages-preview.component.html',
	styleUrls: ['./pages-preview.component.scss'],
	providers: [RouteLayer]
})
export class PagePreviewComponent implements OnInit, OnDestroy, CanComponentDeactivate {

	constructor(readonly routeLayer$: RouteLayer) {
		document.title = "Page Preview";
	}

	canDeactivate(): boolean {
		return confirm("Go from page preview?");
	}

	ngOnInit(): void {
		console.log(`Page Preview Created`);
	}

	ngOnDestroy(): void {
		console.log(`Page Preview Destroyed`);
	}

}
