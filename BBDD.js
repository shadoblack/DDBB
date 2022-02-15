let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host    :   "localhost",
        user    :   "root",
        password:   "mysql",
        database:   "codenotch",   
    }

)

connection.connect(function(error){
    if(error){
        console.log(error);

}else{
    console.log("conexion correcta.");
}
});



let sql ="ALTER TABLE asignaturas ADD COLUMN puntuacionDelAlumnado VARCHAR(10) NOT NULL AFTER cursadaEsteAño";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("columna añadida");
        console.log(result);
    }
});


 sql ="ALTER TABLE alumnos DROP COLUMN asignaturasCursadas ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("columna eliminada");
        console.log(result);
    }
});

sql ="DROP TABLE profesores";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("tabla eliminada");
        console.log(result);
    }
});

connection.end();

