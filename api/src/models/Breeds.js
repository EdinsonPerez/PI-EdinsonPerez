const { DataTypes, Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breeds', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 //me genera automaticamente un UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true
    },
    height_min: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    height_max: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    weight_min: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    weight_max: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  createdInDb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  },
    { timestamps: false }
);
};
