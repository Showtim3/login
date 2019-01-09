const Sequelize=require('sequelize');
const DT= Sequelize.DataTypes;
const Op=Sequelize.Op;

const db=new Sequelize({
    storage: __dirname+'/login.db',
    dialect:'sqlite'
})

const login= db.define('userlogin',{
    username: {
        type : DT.STRING
    },
    password: {
        type: DT.STRING
    },
    email: {
        type : DT.STRING
    },
    number : {
        type : DT.STRING
    },
    

})

db.sync();

module.exports = {
    login,
    Op
}