import app from "../src/server.js";

export default async (req, res) => {
  await new Promise(resolve => app.listen(app.get("port"), resolve));
  console.log(`Conectado al puerto ${app.get('port')}`);
  res.end();
};
