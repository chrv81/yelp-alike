/* eslint-disable no-unused-vars */
// @ts-nocheck
import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Comments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Restaurants',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Comments',
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
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "restaurant_id",
        using: "BTREE",
        fields: [
          { name: "restaurant_id" },
        ]
      },
    ]
  });
  }
}
