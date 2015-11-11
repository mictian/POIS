var _ = require('underscore');

var _categories = [];

module.exports = {
	get: function (appId)
	{
		if (!appId)
			return _categories;

		return _.where(_categories, {appId: Number(appId)});
	},
	setDB: function (categoriesDB)
	{
		_categories = categoriesDB;
	},
	getCategoriesByName: function (name, appId)
	{
		var categorySelected;

		_.each(this.get(appId), function (category)
		{
			if (name == category.name)
			{
				categorySelected = category;
			}
		});

		return categorySelected;
	}
};