import { ProviderIdsTestData } from './providerIdsTestData';

export class ProviderIds {
	Tmdb: string;
	Tvdb: string;
	Imdb: string;
	TmdbCollection: string;

	constructor(data: ProviderIdsTestData) {
		this.Imdb = data.Imdb;
		this.Tmdb = data.Tmdb;
		this.Tvdb = data.Tvdb;
		this.TmdbCollection = data.TmdbCollection;
	}
}
