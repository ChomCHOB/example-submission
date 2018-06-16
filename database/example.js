const Item = sequelize.define(
	'Item',
	{
		id: Sequelize.INTEGER,
		name: Sequelize.STRING,
		detail: Sequelize.STRING,
		price: Sequelize.INTEGER,
		releasedAt: Sequelize.DATE,
		expiredAt: Sequelize.DATE
	},
	{
		classMethods: {
			associate: function(models) {
				Item.hasOne(ItemStock, { foreignKey: 'item_id' })
				Item.hasMany(Code, { foreignKey: 'code_id' })
				Item.hasMany(Promotion, { foreignKey: 'promotion_id' })
			}
		}
	}
)

const ItemStock = sequelize.define(
	'ItemStock',
	{
		id: Sequelize.INTEGER,
		item_id: Sequelize.STRING,
		quantity: Sequelize.INTEGER,
		updatedAt: Sequelize.DATE
	},
	{
		classMethods: {
			associate: function(models) {
				ItemStock.belongsTo(Item, { foreignKey: 'item_id' })
			}
		}
	}
)

const Code = sequelize.define(
	'Code',
	{
		code_id: Sequelize.INTEGER,
		code_name: Sequelize.STRING,
		promotion: Sequelize.STRING,
		used: Sequelize.BOOLEAN,
		createdAt: Sequelize.DATE
	},
	{
		classMethods: {
			associate: function(models) {
				ItemStock.belongsTo(Item, { foreignKey: 'code_id' })
			}
		}
	}
)

const Promotion = sequelize.define(
	'Promotion',
	{
		promotion_id: Sequelize.INTEGER,
		discount: Sequelize.INTEGER,
		startAt: Sequelize.DATE,
		endAt: Sequelize.DATE
	},
	{
		classMethods: {
			associate: function(models) {
				ItemStock.belongsTo(Item, { foreignKey: 'promotion_id' })
			}
		}
	}
)

const Bundle = sequelize.define('Bundle', {
	bundle_id: Sequelize.INTEGER,
	bundle_name: Sequelize.STRING,
	items: Sequelize.ARRAY(Sequelize.INTEGER),
	price: Sequelize.INTEGER,
	releasedAt: Sequelize.DATE,
	expiredAt: Sequelize.DATE
})
