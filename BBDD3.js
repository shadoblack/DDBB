let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host    :   "localhost",
        user    :   "root",
        password:   "mysql",
        database:   "codenotch_2",   
    }

)

connection.connect(function(error){
    if(error){
        console.log(error);

}else{
    console.log("conexion correcta.");
}
});

//media alumnos

let sql= "SELECT AVG(mark) FROM codenotch_2.marks WHERE subject_id = 1"
connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("media de los alumnos hecha de la asignatura 1.");
        console.log(result);
    }
});

//total alumnos bootcamp

sql= "SELECT COUNT(student_id) FROM codenotch_2.students"
connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("cantidad de alumnos del bootcamp");
        console.log(result);
    }
});

//listar todos los campos de la tabla groups

sql= "SELECT * FROM codenotch_2.groups"
connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listado de campos de groups");
        console.log(result);
    }
});



//eliminar notas de la BBDD por encima de 5 del año pasado,sin BETWEEN

sql= "DELETE FROM codenotch_2.marks WHERE mark > 4 AND date ='2021-06-15'"
connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("eliminadas notas por encima de 5 del año pasado");
        console.log(result);
    }
});

//reto3

//eliminar de la base de datos todas las notas cuya fecha tenga mas de 10 años

sql="DELETE FROM codenotch_2.marks WHERE date < '2012-06-15'";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("datos eliminados");
        console.log(result);
    }
});

sql="UPDATE codenotch_2.marks SET mark = 5 WHERE mark =4 OR mark=3 OR mark=2 OR mark=1 OR mark=0";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("datos modificados");
        console.log(result);
    }
});

//alumnos cursando este año

sql="SELECT * FROM codenotch_2.students WHERE dateOfJoin = '2022-06-15'";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("alumnos cursando este año");
        console.log(result);
    }
});

//numero de profesores por asignatura

sql="SELECT subject_id, COUNT (teacher_id) FROM codenotch_2.subject_teacher GROUP BY subject_id ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("profesores por cada asignatura");
        console.log(result);
    }
});

//reto2
// Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
//mayor de 8 y la nota tenga fecha del año pasado.

sql="SELECT mark_id,mark FROM codenotch_2.marks WHERE(mark_id BETWEEN 1 AND 20) OR (mark < 8 AND date = '2021-06-15') ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("nota alumnos");
        console.log(result);
    }
});

//Obtén la media de las notas que se han dado en el último año por asignatura.

sql="SELECT AVG(mark) FROM codenotch_2.marks WHERE date = '2018-06-15' GROUP BY subject_id ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("nota alumnos ultimo año");
        console.log(result);
    }
});

//Obtén la media aritmética de las notas que se han dado en el último año por alumno.

sql="SELECT AVG(mark) FROM codenotch_2.marks WHERE date = '2018-06-15' GROUP BY student_id ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("media aritmetica del ultimo año por alumno");
        console.log(result);
    }
});

connection.end();
