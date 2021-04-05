import { isEqual } from "lodash";

export enum ComponentDisplay {
	PagePreview = 0,
	PageEdit = 1,
	PageCreate = 2,
	ComponentEdit = 3,
	ComponentCreate = 4
}

export function detectMode(pageId: string, compId: string, mode: "edit" | "create"): ComponentDisplay {

	const incoming = [!!mode, !!pageId, !!compId];

	switch (true) {
		case isEqual(incoming, [true, true, false]):
			return ComponentDisplay.PageEdit;
		case isEqual(incoming, [true, false, false]):
			return ComponentDisplay.PageCreate;
		case isEqual(incoming, [false, true, false]):
			return ComponentDisplay.PagePreview;
		case isEqual(incoming, [false, false, true]):
			return ComponentDisplay.ComponentEdit;
		default:
			return ComponentDisplay.ComponentCreate;
	}

}
