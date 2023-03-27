const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{                                          // ID
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {                                       //NOMBRE
      type: DataTypes.STRING,
      allowNull: false,   // ¿Permito que sea nulo? NOO
    },
    image:{                                      //IMAGEN
        type:DataTypes.STRING,
        allowNull: true,   // ¿Permito que sea nulo? SI, puede ser
    },
    hp:{                                       //VIDA
        type: DataTypes.STRING,
        allowNull: true,
    },
    attack:{                                    //ATAQUE
        type: DataTypes.STRING,
        allowNull: true,
    },
    defense:{                                   //DEFENSA
        type: DataTypes.STRING,
        allowNull: true,
    },
    speed:{                                     //VELOCIDAD
        type: DataTypes.STRING,
        allowNull:true, 
    },
    height:{                                    //ALTURA
        type: DataTypes.STRING,
        allowNull: true,
    },
    weight:{                                    //PESO
        type: DataTypes.STRING,
        allowNull:true,
    }

  });
};
