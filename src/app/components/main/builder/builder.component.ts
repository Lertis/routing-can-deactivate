import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-builder',
	templateUrl: './builder.component.html',
	styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {
	constructor(private readonly router: Router) {
		this.router.navigateByUrl("/builder/page/1", { replaceUrl: true });
		document.title = "Builder";
	}

	ngOnInit(): void {
		console.log(`Builder Created`);
	}

	ngOnDestroy(): void {
		console.log(`Builder Destroyed`);
	}
}
