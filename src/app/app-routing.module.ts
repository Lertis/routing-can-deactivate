import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuilderComponent } from "./components/main/builder/builder.component";
import { DetailsComponent } from "./components/main/details/details.component";

import { PagePreviewComponent } from "./components/types/pages-preview/pages-preview.component";
import { PageCreateComponent } from "./components/types/page-create/page-create.component";
import { PageEditComponent } from "./components/types/page-edit/page-edit.component";

import { ComponentCreateComponent } from "./components/types/component-create/component-create.component";
import { ComponentEditComponent } from "./components/types/component-edit/component-edit.component";

import { NotFoundComponent } from "./components/not-found/not-found.component";

import { CanDeactivateGuard } from "./can.deactivate.guard";


const routes: Routes = [
	{
		path: "details",
		component: DetailsComponent,
		canDeactivate: [CanDeactivateGuard]
	},
	{
		path: "builder",
		component: BuilderComponent,
		children: [
			{
				path: "page/:pageId",
				component: PagePreviewComponent,
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: "page-profile/:pageId/:mode",
				component: PageEditComponent,
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: "page-profile/:mode",
				component: PageCreateComponent,
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: "component/:compId",
				component: ComponentEditComponent,
				canDeactivate: [CanDeactivateGuard]
			},
			{
				path: "component-create",
				component: ComponentCreateComponent,
				canDeactivate: [CanDeactivateGuard]
			},
		]
	},
	{
		path: "",
		redirectTo: "details",
		pathMatch: "full"
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
