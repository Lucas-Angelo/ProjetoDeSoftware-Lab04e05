import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface IAtributosParceiro {
  id: number,
  usuario_id: number,
  nome: string,
}
export interface IAtributosParceiroCriacao extends Optional<IAtributosParceiro, 'id'> { }

class Parceiro extends Model<IAtributosParceiro, IAtributosParceiroCriacao> implements IAtributosParceiro {

  id!: number;
  usuario_id!: number;
  nome!: string;

  static initialize(sequelize: Sequelize) {
    Parceiro.init({
      id: {
        type: DataTypes.INTEGER().UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      usuario_id: {
        type: DataTypes.INTEGER().UNSIGNED,
        references: {
          model: Parceiro,
          key: "id"
        }
      },
      nome: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
    },
      {
        tableName: "parceiro",
        timestamps: false,
        paranoid: false,
        createdAt: false,
        updatedAt: false,
        sequelize,
      })
  }
}

export default Parceiro;
