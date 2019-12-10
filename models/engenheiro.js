
module.exports = (sequelize, DataTypes) => {
    const Engenheiro = sequelize.define(
      'engenheiro',
      {
        id:{
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        eng_nome: DataTypes.STRING,
        eng_apelido: DataTypes.STRING,
        eng_telefone: DataTypes.STRING,
        eng_crea: DataTypes.STRING,
        eng_datacrea: DataTypes.DATE
      },{
      freezeTableName: true,
      timestamps: false
    });

    Engenheiro.associate = (models) => {
      Engenheiro.hasMany(models.obra, {foreignKey: 'eng_codigo'});
    }
      return Engenheiro;
    }
