import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable()
export class RouteLayer implements OnDestroy {
	private readonly destory$ = new Subject<void>();
	constructor(private readonly route: ActivatedRoute) { }

	getRouteParams() {
		return this.route.params.pipe(takeUntil(this.destory$));
	}

	ngOnDestroy(): void {
		this.destory$.next();
		this.destory$.complete();
	}
}


