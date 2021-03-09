import { ItemsTestData } from './itemsTestData';
export class Items {
	Name: string;
	ServerId: string;
	Id: string;
	Type: string;
	MediaType: string;
	Path: string;
	ParentId: string;
	SeriesId: string;
	SeasonId: string;

	constructor(data: ItemsTestData) {
		this.Name = data.Name;
		this.ServerId = data.ServerId;
		this.Id = data.Id;
		this.Type = data.Type;
		this.MediaType = data.MediaType;
		this.Path = data.Path;
		this.ParentId = data.ParentId;
		this.SeriesId = data.SeriesId;
		this.SeasonId = data.SeasonId;
	}
}
