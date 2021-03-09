import jsonItems from '../../data/items.json';
import jsonItemsCounts from '../../data/itemsCounts.json';
import jsonSystemInfoPublic from '../../data/systemInfoPublic.json';
import jsonUsers from '../../data/users.json';
export class DataStore {
	static items = jsonItems;
	static itemsCounts = jsonItemsCounts;
	static systemInfoPublic = jsonSystemInfoPublic;
	static users = jsonUsers;
}
