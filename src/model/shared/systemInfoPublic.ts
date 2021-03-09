import { SystemInfoPublicTestData } from './systemInfoPublicTestData';

export class SystemInfoPublic {
	LocalAddress: string;
	WanAddress: string;
	ServerName: string;
	Version: string;
	Id: string;

	constructor(data: SystemInfoPublicTestData) {
		this.LocalAddress = data.LocalAddress;
		this.WanAddress = data.WanAddress;
		this.ServerName = data.ServerName;
		this.Version = data.Version;
		this.Id = data.Id;
	}
}
