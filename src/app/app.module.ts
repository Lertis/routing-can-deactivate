import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { DetailsComponent } from './components/main/details/details.component';
import { BuilderComponent } from './components/main/builder/builder.component';
import { CommonBuilderRedirectionComponent } from './components/main/common-builder-redirection/common-builder-redirection.component';
import { SiteMapComponent } from "./components/main/site-map/site-map.component";

import { PagePreviewComponent } from "./components/types/pages-preview/pages-preview.component";
import { PageEditCreateFormComponent } from './components/types/page-edit-create-form/page-edit-create-form.component';
import { PageEditComponent } from './components/types/page-edit/page-edit.component';
import { PageCreateComponent } from './components/types/page-create/page-create.component';

import { ComponentCreateComponent } from './components/types/component-create/component-create.component';
import { ComponentEditComponent } from './components/types/component-edit/component-edit.component';
import { ComponentsEditCreateComponent } from "./components/types/components-edit-create/components-edit-create.component";

import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
	declarations: [
		AppComponent,

		DetailsComponent,
		BuilderComponent,
		CommonBuilderRedirectionComponent,
		SiteMapComponent,

		PagePreviewComponent,
		PageEditCreateFormComponent,
		PageEditComponent,
		PageCreateComponent,

		ComponentsEditCreateComponent,
		ComponentCreateComponent,
		ComponentEditComponent,

		NotFoundComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
