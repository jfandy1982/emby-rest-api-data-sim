/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ItemsTestData {
	Name: string;
	ServerId: string;
	Id: string;
	Type: string;
	MediaType: string;
	Path: string;
	ParentId: string;
	SeriesId: string;
	SeasonId: string;

	constructor(data: any) {
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
