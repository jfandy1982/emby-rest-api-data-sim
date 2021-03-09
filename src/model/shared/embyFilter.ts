/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class EmbyFilters {
	readonly userId: string;
	readonly Id: string;
	readonly serverId: string;
	readonly recursive: boolean;
	readonly isPlayed: boolean;

	constructor(data: any) {
		this.userId = data.UserId;
		this.Id = data.Id;
		this.serverId = data.serverId;
		this.recursive = data.Recursive;
		this.isPlayed = data.IsPlayed;
	}
}
