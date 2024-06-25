import Sequelize from "sequelize";
import sequelize from "../database/db.js";
import Usuario from "./usuario.js";

// modelo administrador
const Administrador = sequelize.define(
  "administrador",
  {
    cedula: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  },
  {
    tableName: "administrador",
    timestamps: false,
  }
);

// Relación con la tabla usuarios
Administrador.belongsTo(Usuario, {
  foreignKey: "cedula",
  as: "administrador",
  targetKey: "cedula",
  as: "usuario",
});

export default Administrador;
