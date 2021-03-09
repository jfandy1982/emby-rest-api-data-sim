import { UsersTestData } from './usersTestData';

export class Users {
	Name: string;
	ServerId: string;
	Id: string;
	LastLoginDate: string;
	LastActivityDate: string;

	constructor(data: UsersTestData) {
		this.Name = data.Name;
		this.ServerId = data.ServerId;
		this.Id = data.Id;
		this.LastLoginDate = data.LastLoginDate;
		this.LastActivityDate = data.LastActivityDate;
	}
}
