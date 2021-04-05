import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";
import { RouteLayer } from "../route.layer";

@Component({
	selector: 'app-component-edit',
	templateUrl: './component-edit.component.html',
	styleUrls: ['./component-edit.component.scss'],
	providers: [RouteLayer]
})
export class ComponentEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {

	constructor(readonly routeLayer$: RouteLayer) {
		document.title = "Component Edit";
		this.routeLayer$.getRouteParams().subscribe(a => console.log(a));
	}

	canDeactivate(): boolean {
		return confirm("Go from component edit?");
	}

	ngOnInit(): void {
		console.log(`Component Edit Created`);
	}

	ngOnDestroy(): void {
		console.log(`Component Edit Destroyed`);
	}

}
