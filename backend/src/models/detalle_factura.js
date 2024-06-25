import Sequelize from "sequelize";
import sequelize from "../database/db.js";
import Usuario from "./usuario.js";

// modelo administrador
const Detalle_factura = sequelize.define(
    "detalle_factura",
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
        tableName: "detalle_factura",
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

export default Detalle_factura;
