const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const envVarUse = process.env.DB_USERNAME;
const envVarPas = process.env.DB_PASSWORD;
const envVarHos = process.env.DB_HOSTNAME;
const sequelize = new Sequelize(
  `postgres://${envVarUse}:${envVarPas}@${envVarHos}:5432/menudb`,
  {
    retry: {
      match: [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /SequelizeAccessDeniedError/
      ],
      name: "query",
      backoffBase: 100,
      backoffExponent: 1.1,
      timeout: 60000,
      max: Infinity
    }
  }
);

class Menu extends Sequelize.Model {}

Menu.init(
  {
    Key: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Data: {
      type: DataTypes.STRING(4000),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Menu",
    timestamps: false
  }
);

module.exports = {
  Menu,
  sequelize
};