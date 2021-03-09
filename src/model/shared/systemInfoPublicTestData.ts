/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class SystemInfoPublicTestData {
	LocalAddress: string;
	WanAddress: string;
	ServerName: string;
	Version: string;
	Id: string;

	constructor(data: any) {
		this.LocalAddress = data.LocalAddress;
		this.WanAddress = data.WanAddress;
		this.ServerName = data.ServerName;
		this.Version = data.Version;
		this.Id = data.Id;
	}
}
