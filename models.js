const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Mpe1gem_form = sequelize.define(
  "mpe1gem",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    npp: { type: DataTypes.INTEGER, allowNull: true },
    r1022_fk: { type: DataTypes.STRING(11), allowNull: false },
    naim_org: { type: DataTypes.STRING(1000), allowNull: true },
    adr_fact: { type: DataTypes.STRING(1000), allowNull: true },
    inn: { type: DataTypes.STRING(10), allowNull: true },
    plazma_max: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    plazma_cena: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    erm_max: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    erm_cena: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    immg_max: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    immg_cena: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    alb_max: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
    alb_cena: { type: DataTypes.DECIMAL(17, 6), allowNull: true },
  },
  {
    freezeTableName: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    schema: "minzdrav",
  }
);

const r1022 = sequelize.define(
  "r1022",
  {
    p00: { type: DataTypes.STRING(11), primaryKey: true },
    p01: { type: DataTypes.STRING(500) },
    p02: { type: DataTypes.STRING },
    utv: { type: DataTypes.STRING },
    sp: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    schema: "public",
    timestamps: false,
  }
);

r1022.hasMany(Mpe1gem_form, {
  foreignKey: "r1022_fk",
    sourceKey: 'p00'
});
//
Mpe1gem_form.belongsTo(r1022, {
  foreignKey: "r1022_fk",
    sourceKey: 'p00'
});

module.exports = {
  Mpe1gem_form,
  r1022,
};
