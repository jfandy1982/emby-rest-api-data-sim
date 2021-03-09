import { ItemsCountsTestData } from './itemsCountsTestData';

export class ItemsCounts {
	MovieCount: number;
	SeriesCount: number;
	EpisodeCount: number;

	constructor(data: ItemsCountsTestData) {
		this.MovieCount = data.MovieCount;
		this.SeriesCount = data.SeriesCount;
		this.EpisodeCount = data.EpisodeCount;
	}
}
