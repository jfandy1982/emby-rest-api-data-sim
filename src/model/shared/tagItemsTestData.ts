/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class TagItemsTestData {
	Name: string;
	Id: number;
	constructor(data: any) {
		this.Name = data.Name;
		this.Id = data.Id;
	}
}
