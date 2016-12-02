module.exports = function(sequelize, DataTypes) {
	return sequelize.define('meal', {
		restaraunt: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 50]
			}
		},
		meal: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4, 25]
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: " Mmmmm....very tasty",
			validate: {
				len: [10, 250]
			}
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 1,
			validate: {
				isInt: true
			}
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	},
	{
		timestamps: false,      //don't add the timestamp attributes (updatedAt, createdAt)
		freezeTableName: true
	}
	);
};
