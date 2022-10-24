const Router = require("express");
const router = new Router();
const { Mpe1gem_form } = require("../models");

let nf = "mpe1gem isn't found";

class mpe1gem {
  async create_mpe1gem(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let {
      npp,
      r1022_fk,
      naim_org,
      adr_fact,
      inn,
      plazma_max,
      plazma_cena,
      erm_max,
      erm_cena,
      immg_max,
      immg_cena,
      alb_max,
      alb_cena,
    } = req.body;

    if (req.body.r1022_fk) {
      try {
        let mpe1gemNew = await Mpe1gem_form.create({
          npp,
          r1022_fk,
          naim_org,
          adr_fact,
          inn,
          plazma_max,
          plazma_cena,
          erm_max,
          erm_cena,
          immg_max,
          immg_cena,
          alb_max,
          alb_cena,
        });
        return res.json(mpe1gemNew);
      } catch (e) {
        return res.json(e);
      }
    } else {
      return res.json("ERROR: r1022_fk is undefined");
    }
  }

  async remove_mpe1gem(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let { id } = req.body;
    try {
      let a = await Mpe1gem_form.findOne({ where: id }).then((row) => {
        if (!row) {
          return null;
        }
        row.destroy();
        return row;
      });
      if (!a) {
        return res.json(nf);
      }
      return res.json({ mpe1gem_removed: a });
    } catch (e) {
      return res.json(e);
    }
  }

  async update_mpe1gem(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let { id } = req.body;
    if (id) {
      try {
        let a = await Mpe1gem_form.findOne({ where: id }).then((row) => {
          if (!row) {
            return nf;
          }
          row.set(req.body);
          row.save();
          return row;
        });
        return res.json(a);
      } catch (e) {
        return res.json(e);
      }
    } else {
      return res.json("please define mpe1gem's id");
    }
  }

  async getAllmpe1gem(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      let { r1022_fk } = req.query;
      let all = await Mpe1gem_form.findAll({ where: { r1022_fk } });

      return res.json(all);
    } catch (e) {
      return e;
    }
  }

  async getSelectedMpe1gem(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      let { r1022_fk } = req.query;
      let all = await Mpe1gem_form.findAll({ where: { r1022_fk } });

      return res.json(all);
    } catch (e) {
      return e;
    }
  }
}

router.get("/getall", new mpe1gem().getAllmpe1gem);
router.get("/get", new mpe1gem().getSelectedMpe1gem);

router.post("/create", new mpe1gem().create_mpe1gem);
router.post("/remove", new mpe1gem().remove_mpe1gem);
router.post("/update", new mpe1gem().update_mpe1gem);

module.exports = router;
