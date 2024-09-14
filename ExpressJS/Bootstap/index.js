import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let sitname = "My Website";
    let serchText = "Search";
    res.render("index", { sitname: sitname, serchText: serchText });
});

app.get('/blogpost', (req, res) => {
    let sitname = "My Website and when you search";
    let serchText = "Its show the result";
    res.render("blogpost", { blogTitle: sitname, blogContent: serchText });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});