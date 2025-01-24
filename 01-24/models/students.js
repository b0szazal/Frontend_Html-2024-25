import Sequelize from "sequelize";
import sequelize from "../database.js";

const {DataTypes} = Sequelize;

const Students = sequelize.define('students', {
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false,
        validate:{
            len: [4, 20]
        }
    },
    favorite_class:{
        type: DataTypes.STRING(25),
        default: "Computer Science",
    },
    school_year:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    has_language_examination:{
        type: DataTypes.TINYINT,
        default: true,
    }
})

export default Students;