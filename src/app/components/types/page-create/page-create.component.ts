import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";
import { RouteLayer } from "../route.layer";

@Component({
	selector: 'app-page-create',
	templateUrl: './page-create.component.html',
	styleUrls: ['./page-create.component.scss'],
	providers: [RouteLayer]
})
export class PageCreateComponent implements OnInit, OnDestroy, CanComponentDeactivate {

	constructor(readonly routeLayer$: RouteLayer) {
		document.title = "Page Create";
		this.routeLayer$.getRouteParams().subscribe(a => console.log(a));
	}

	canDeactivate(): boolean {
		return confirm("Go from page create?");
	}

	ngOnInit(): void {
		console.log(`Page Create Created`);
	}

	ngOnDestroy(): void {
		console.log(`Page Create Destroyed`);
	}

}
