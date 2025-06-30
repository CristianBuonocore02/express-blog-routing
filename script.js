const express = require('express');
const app = express();
const port = 3000;

//router
const postsRouter = require('./routers/posts');

// per usare il router /posts
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
});
