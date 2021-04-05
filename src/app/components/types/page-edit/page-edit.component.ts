import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";
import { RouteLayer } from "../route.layer";

@Component({
	selector: 'app-page-edit',
	templateUrl: './page-edit.component.html',
	styleUrls: ['./page-edit.component.scss'],
	providers: [RouteLayer]
})
export class PageEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {

	constructor(readonly routeLayer$: RouteLayer) {
		document.title = "Page Edit";
		this.routeLayer$.getRouteParams().subscribe(a => console.log(a));
	}

	canDeactivate(): boolean {
		return confirm("Go from page edit?");
	}

	ngOnInit(): void {
		console.log(`Page Edit Created`);
	}

	ngOnDestroy(): void {
		console.log(`Page Edit Destroyed`);
	}

}
