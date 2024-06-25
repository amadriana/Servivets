import Sequelize from "sequelize";
import sequelize from "../database/db.js";
import Usuario from "./usuario.js";

// modelo administrador
const Dueño = sequelize.define(
    "dueño",
    {
        id_detalle_factura: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        id_factura: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        subtotal: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "dueño",
        timestamps: false,
    }
);

// Relación con la tabla usuarios
// Administrador.belongsTo(Usuario, {
//     foreignKey: "cedula",
//     as: "administrador",
//     targetKey: "cedula",
//     as: "usuario",
// });

export default Dueño;