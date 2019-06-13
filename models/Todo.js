module.exports = (sequelize, DataTypes) => {
    var Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'id'
        },
        todo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'todo'
        },
        is_delete: {
            type: DataTypes.ENUM('1', '0'),
            allowNull: true,
            field: 'is_delete'
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_date'
        },
        deleted_date: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_date'
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
    return Todo;
};