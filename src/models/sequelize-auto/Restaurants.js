import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Restaurants extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cuisine: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Restaurants',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
