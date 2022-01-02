const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './jobsDB.db'
});

const USERS = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    visible: {
        type: DataTypes.STRING,
        defaultValue: 'true'
    }
}, {
    underscored: true
});

const CATEGORY = sequelize.define('category', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    underscored: true
});

const NOTIFICATION_DETAILS = sequelize.define('notification_detail', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    category_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    job_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    underscored: true
});

// // Reset DB
// sequelize.sync({
//     // alter: true,
//     force: true
// }).then(suc => console.log("SUCCESS=====", suc.models)).catch(err => console.log("ERROR+++++", err))

module.exports = {
    USERS,
    CATEGORY,
    NOTIFICATION_DETAILS
};