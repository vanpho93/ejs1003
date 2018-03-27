const express = require('express');
const reload = require('reload');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const arrWords = [
        { _id: 'abcd1', en: 'One', vn: 'Mot', isMemorized: true },
        { _id: 'abcd2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abcd3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abcd4', en: 'Five', vn: 'Bon', isMemorized: true },
    ];
    res.render('main', { troiMua: false, arrWords });
});

app.listen(3000, () => console.log('Server started!'));
reload(app);
