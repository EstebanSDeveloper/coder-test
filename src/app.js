import express from "express";
import ProductManager from "./ProductManager";

const app = express();

app.listen(8080, () => {
	console.log("SERVIDOR DE PRUEBA");
});
