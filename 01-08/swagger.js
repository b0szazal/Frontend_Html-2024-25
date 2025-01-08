import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'books API',
        version: "1.0.0",
        description: 'books API'
    },
    host: 'localhost:3000',
    basePath: "/api/books"
}
const outputFile = './swagger-output.json';
const routes = ['./routes/books.js'];
swaggerAutogen()(outputFile, routes, doc);