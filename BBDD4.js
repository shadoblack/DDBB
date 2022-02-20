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

//reto1
//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
//están apuntados.
let params=[]
let sql= "SELECT first_name,last_name,mark FROM codenotch_2.students JOIN codenotch_2.marks ON(codenotch_2.students.student_id=codenotch_2.marks.student_id) "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 1");
        console.log(result);
    }
});

//reto2
//Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

params=[]
sql= "SELECT first_name,last_name,title FROM codenotch_2.teachers LEFT JOIN codenotch_2.subjects ON(codenotch_2.teachers.teacher_id=codenotch_2.subjects.title) "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 2");
        console.log(result);
    }
});

//reto3
//Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

params=[]
sql= "SELECT first_name,last_name,title FROM codenotch_2.teachers LEFT JOIN codenotch_2.subjects ON(codenotch_2.teachers.teacher_id=codenotch_2.subjects.title) "
connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("reto 3");
        console.log(result);
    }
});



connection.end();
