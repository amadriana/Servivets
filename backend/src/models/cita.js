import Sequelize from "sequelize";
import sequelize from "../database/db";

const Cita = sequelize.define(
    "cita",
    {
        id_cita: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_cita: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        hora_cita: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        id_veterinario: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_mascota: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        motivo_cita: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        estado: {
            type: Sequelize.ENUM("Pendiente", "Relizado"),
        },
    },
    {
        tableName: "cita",
        timestamps: false,
    }
);

export default Cita;