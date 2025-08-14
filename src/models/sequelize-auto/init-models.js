import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Comments from  "./Comments.js";
import _Likes from  "./Likes.js";
import _Restaurants from  "./Restaurants.js";
import _Users from  "./Users.js";

export default function initModels(sequelize) {
  const Comments = _Comments.init(sequelize, DataTypes);
  const Likes = _Likes.init(sequelize, DataTypes);
  const Restaurants = _Restaurants.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  Comments.belongsTo(Restaurants, { as: "restaurant", foreignKey: "restaurant_id"});
  Restaurants.hasMany(Comments, { as: "Comments", foreignKey: "restaurant_id"});
  Likes.belongsTo(Restaurants, { as: "restaurant", foreignKey: "restaurant_id"});
  Restaurants.hasMany(Likes, { as: "Likes", foreignKey: "restaurant_id"});
  Comments.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "user_id"});
  Likes.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Likes, { as: "Likes", foreignKey: "user_id"});

  return {
    Comments,
    Likes,
    Restaurants,
    Users,
  };
}
