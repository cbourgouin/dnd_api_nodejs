import express from 'express';
const port = 5000; 

const app = express();

//Middleware qui permet de traiter les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//lancer le serveur
app.listen(port, () => console.log("serveur demarrer au port : " + port));