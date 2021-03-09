import { RequestHandler } from 'express';
import { DataStore } from '../../model/shared/DataStore';
import { EmbyFilters } from '../../model/shared/embyFilter';
import { Items } from '../../model/shared/items';
import { ItemsTestData } from '../../model/shared/itemsTestData';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiGetItems: RequestHandler = (req, res, next) => {
	const filters = new EmbyFilters(req.query);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const filteredData = DataStore.items.Items.filter((item: ItemsTestData) => {
		// eslint-disable-next-line prettier/prettier
    const conditions = [ filters.serverId ? item.ServerId == filters.serverId : true ];
		return conditions.every((value) => value == true);
	});
	res.json(filteredData.map((item: ItemsTestData) => new Items(item)));
};
