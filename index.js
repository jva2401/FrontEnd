import app from "./src/server.js";

app.listen(app.get("port"), () =>{
    console.log(`Conectado al puerto ${app.get('port')}`);
});