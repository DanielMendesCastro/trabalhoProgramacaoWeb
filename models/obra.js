
module.exports = (sequelize, DataTypes) => {
    const Obra = sequelize.define(
      'obra',
      {
        obr_cidade: DataTypes.STRING,
        obr_tipoobra: DataTypes.STRING,
        obr_valor: DataTypes.STRING,
        eng_codigo: DataTypes.DECIMAL,
        obr_dtinicio: DataTypes.DATE
      },{      
        freezeTableName: true,
        timestamps: false 
    });

      return Obra;
    }
