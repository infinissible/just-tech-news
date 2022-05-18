const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true
=======
      autoIncrement: true,
>>>>>>> develop
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [1]
      }
=======
        len: [1],
      },
>>>>>>> develop
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
<<<<<<< HEAD
        key: 'id'
      }
=======
        key: 'id',
      },
>>>>>>> develop
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
<<<<<<< HEAD
        key: 'id'
      }
    }
=======
        key: 'id',
      },
    },
>>>>>>> develop
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
