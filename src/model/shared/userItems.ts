import { UserItemsTestData } from './userItemsTestData';

export class UserItems {
	ItemId: string;
	Played: boolean;

	constructor(data: UserItemsTestData) {
		this.ItemId = data.ItemId;
		this.Played = data.Played;
	}
}
