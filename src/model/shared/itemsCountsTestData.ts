/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ItemsCountsTestData {
	UserId: string;
	MovieCount: number;
	SeriesCount: number;
	EpisodeCount: number;

	constructor(data: any) {
		this.UserId = data.UserId;
		this.MovieCount = data.MovieCount;
		this.SeriesCount = data.SeriesCount;
		this.EpisodeCount = data.EpisodeCount;
	}
}
