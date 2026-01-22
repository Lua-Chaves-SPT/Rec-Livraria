var express = require("express");
var router = express.Router();

var livrosController = require("../controllers/livrosController");

router.get("/listar", function (req, res) {
    livrosController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    livrosController.cadastrar(req, res);
});

router.put("/editar/:id", function (req, res) {
    livrosController.editar(req, res);
});

router.get("/autoresCaros", function (req, res) {
    livrosController.autoresCaros(req, res);
});

router.get("/maiorGenero", function (req, res) {
    livrosController.maiorGenero(req, res);
});

router.get("/listarGeneros", function (req, res) {
    livrosController.listarGeneros(req, res);
});

module.exports = router;