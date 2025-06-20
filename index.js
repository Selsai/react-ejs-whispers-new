// index.js
import { app } from "./server.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ Serveur en ligne : http://localhost:${port}/about`);
});
