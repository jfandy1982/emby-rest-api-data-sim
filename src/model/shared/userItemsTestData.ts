/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class UserItemsTestData {
	Id: string;
	ItemId: string;
	Played: boolean;

	constructor(data: any) {
		this.Id = data.Id;
		this.ItemId = data.ItemId;
		this.Played = data.Played;
	}
}
