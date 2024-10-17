import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import __dirname from './util/rootpath.js';

const app = express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRoutes);
app.use('/', shopRoutes);

app.use((req, res)=>{
    res.status(404).render('404.ejs', {
        pageTitle: 'Page Not found',
        path: ''
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
