import { RequestHandler } from 'express';
import { DataStore } from '../../model/shared/DataStore';
import { EmbyFilters } from '../../model/shared/embyFilter';
import { ItemsCounts } from '../../model/shared/itemsCounts';
import { ItemsCountsTestData } from '../../model/shared/itemsCountsTestData';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiGetItemsCounts: RequestHandler = (req, res, next) => {
	const filters = new EmbyFilters(req.query);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const filteredData = DataStore.itemsCounts.filter(
		(item: ItemsCountsTestData) => {
			// eslint-disable-next-line prettier/prettier
    const conditions = [ filters.userId ? item.UserId == filters.userId : true ];
			return conditions.every((value) => value == true);
		},
	);

	res.json(
		filteredData.map((item: ItemsCountsTestData) => new ItemsCounts(item)),
	);
};
