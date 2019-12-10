
module.exports = (sequelize, DataTypes) => {
    const Obra = sequelize.define(
      'obra',
      {
        id:{
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        obr_cidade: DataTypes.STRING,
        obr_tipoobra: DataTypes.STRING,
        obr_valor: DataTypes.STRING,
        eng_codigo:  DataTypes.BIGINT,
        obr_dtinicio: DataTypes.DATE
      },{
      freezeTableName: true,
      timestamps: false
    });

    Obra.associate = (models) => {
      Obra.belongsTo(models.engenheiro, {foreignKey: 'eng_codigo'});
    }

      return Obra;
    }
