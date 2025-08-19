import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Users extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: 'username',
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: 'email',
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'Users',
        timestamps: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
          {
            name: 'username',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'username' }],
          },
          {
            name: 'email',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'email' }],
          },
        ],
      }
    );
  }
}
