import { TagItemsTestData } from './tagItemsTestData';

export class TagItems {
	Name: string;
	Id: number;
	constructor(data: TagItemsTestData) {
		this.Name = data.Name;
		this.Id = data.Id;
	}
}
