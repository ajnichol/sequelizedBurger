
module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("burgers", {
		id: {
    		type: Sequelize.INTEGER,
    		autoIncrement: true,
			primaryKey: true
  		},
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		date: {
			type: DataTypes.DATE
		}, {
			freezeTableName: true,
			timestamps: false
		}		
	});
};



