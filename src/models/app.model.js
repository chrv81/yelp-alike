import sequelize from '../common/sequelize/init.sequelize';
import initModels from './sequelize-auto/init-models.js';

const models = initModels(sequelize);

export default models;
