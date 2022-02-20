let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host    :   "localhost",
        user    :   "root",
        password:   "mysql",
        database:   "codenotch_3",   
    }

)

connection.connect(function(error){
    if(error){
        console.log(error);

}else{
    console.log("conexion correcta.");
}
});

//reto1
//Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
//de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
// email) de la persona que los ha prestado.
let params=[]
let sql= "SELECT * FROM codenotch_3.museos CROSS JOIN codenotch_3.prestamo CROSS JOIN codenotch_3.autores ORDER BY autor_id DESC "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 1");
        console.log(result);
    }
});


//no terminado,consultar con profes posibles maneras de distribuir mejor la BBDD
//preguntar como sacar solo algunas de las columnas de varias tablas al mismo tiempo
connection.end();
