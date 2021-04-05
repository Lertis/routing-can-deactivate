import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanComponentDeactivate } from "../../../can.deactivate.guard";
import { RouteLayer } from "../route.layer";

@Component({
	selector: 'app-component-create',
	templateUrl: './component-create.component.html',
	styleUrls: ['./component-create.component.scss'],
	providers: [RouteLayer]
})
export class ComponentCreateComponent implements OnInit, OnDestroy, CanComponentDeactivate {

	constructor(readonly routeLayer$: RouteLayer) {
		document.title = "Component Create";
		this.routeLayer$.getRouteParams().subscribe(a => console.log(a));
	}

	canDeactivate(): boolean {
		return confirm("Go from component create?");
	}

	ngOnInit(): void {
		console.log(`Component CreateCreated`);
	}

	ngOnDestroy(): void {
		console.log(`Component Create Destroyed`);
	}
}
