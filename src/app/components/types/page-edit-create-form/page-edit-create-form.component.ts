import { Component, Input } from '@angular/core';
import { BuilderTypeMode } from "../../../entity";

@Component({
  selector: 'app-page-edit-create-form',
  templateUrl: './page-edit-create-form.component.html',
  styleUrls: ['./page-edit-create-form.component.scss']
})
export class PageEditCreateFormComponent  {

	@Input() compMode: BuilderTypeMode = BuilderTypeMode.Create;

}
