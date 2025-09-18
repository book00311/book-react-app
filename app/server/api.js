import express from 'express';
const app = express()
const port = 3000

let book = [
    {id: 1, title: "web technology", author: "book 1"},
    {id: 2, title: "web programming", author: "book 2"}
];
 
app.get('/', (req, res) => {
res.send('Hello World!')
})
 
app.post('/api/book',(req,res)=>{
    const {title, author} =req.body;
    const newBook = {id:String(books.length+1), title,author}
    books.push(newBook)
    res.status(201).json(newBook);
})

app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})