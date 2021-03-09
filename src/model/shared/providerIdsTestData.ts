/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ProviderIdsTestData {
	Tmdb: string;
	Tvdb: string;
	Imdb: string;
	TmdbCollection: string;

	constructor(data: any) {
		this.Imdb = data.Imdb;
		this.Tmdb = data.Tmdb;
		this.Tvdb = data.Tvdb;
		this.TmdbCollection = data.TmdbCollection;
	}
}
