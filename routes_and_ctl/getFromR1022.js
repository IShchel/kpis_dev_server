const { r1022 } = require("../models");
const Router = require("express");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const router = new Router();

class getFromR1022 {

  async getFederalSubjectsInstance_0_13(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let fsi = await r1022.findAll({
      where: {
        [Op.and]: [
          sequelize.where(
            sequelize.fn("char_length", sequelize.col("p00")),
            10
          ),
          {
            p00: {
              [Op.or]: [{ [Op.startsWith]: "0" }, { [Op.startsWith]: "13" }],
            },
          },
        ],
      },
    });

    return res.json(fsi);
  }
}

router.get(
  "/getFederalSubjectsInstance_0_13",
  new getFromR1022().getFederalSubjectsInstance_0_13
);

module.exports = router;
