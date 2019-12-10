
module.exports = (sequelize, DataTypes) => {
    const Engenheiro = sequelize.define(
      'engenheiro',
      {
        eng_nome: DataTypes.STRING,
        eng_apelido: DataTypes.STRING,
        eng_telefone: DataTypes.STRING,
        eng_crea: DataTypes.STRING,
        eng_datacrea: DataTypes.DATE
      },{      
        freezeTableName: true,
        timestamps: false 
    });

      return Engenheiro;
    }
