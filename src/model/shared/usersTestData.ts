/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class UsersTestData {
	Name: string;
	ServerId: string;
	Id: string;
	LastLoginDate: string;
	LastActivityDate: string;

	constructor(data: any) {
		this.Name = data.Name;
		this.ServerId = data.ServerId;
		this.Id = data.Id;
		this.LastLoginDate = data.LastLoginDate;
		this.LastActivityDate = data.LastActivityDate;
	}
}
