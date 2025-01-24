import express from 'express';
import sequelize from './database.js';
import Students from './models/students.js';
import { Op } from 'sequelize';

const app = express();

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
})

sequelize.sync()
// .then(() => {
//     Students.bulkCreate([
//         {
//             name: 'John Doe',
//             school_year: 1,
//             favorite_class: 'Mathematics',
//             has_language_examination: true
//         },
//         {
//             name: 'Jane Doe',
//             school_year: 2,
//             favorite_class: 'Physics',
//             has_language_examination: false
//         },
//         {
//             name: 'Michael Smith',
//             school_year: 1,
//             favorite_class: 'Computer Science',
//             has_language_examination: false
//         },
//         {
//             name: 'Maria Garcia',
//             school_year: 3,
//             has_language_examination: true
//         },
//         {
//             name: 'David Johnson',
//             school_year: 2,
//             has_language_examination: false
//         }
//     ])
// })
.then(() => {
    return Students.findAll({
        attributes: ['name'],
        where:{
            [Op.or]: [
                {favorite_class: 'Computer Science'},
                {has_language_examination: true}
            ]
        }
    })
})
.then((students) => {
    console.log(students.map(student => student.name));
})
.then(() => {
    return Students.findAll({
        attributes: ['school_year', 
            [sequelize.fn('COUNT', sequelize.col('school_year')), 'num_students']
        ],
        group: ['school_year'],
    })
})
.then((result) => {
    console.log(result.map(row => row.toJSON()));
})
// .then(() => {
//     Students.drop();
// })