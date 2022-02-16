let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host    :   "localhost",
        user    :   "root",
        password:   "mysql",
        database:   "codenotch_2",   
    }

);

connection.connect(function(error){
    if(error){
        console.log(error);

}else{
    console.log("conexion correcta.");
}
});

//groups

let sql ="INSERT INTO codenotch_2.groups (name) VALUES (\"Mandonguilla\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("group added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.groups (name) VALUES (\"Inclopelusos\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("group added");
        console.log(result);
    }
});

//subjects

sql ="INSERT INTO codenotch_2.subjects (title) VALUES (\"Informatica\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subjects (title) VALUES (\"Telecomunicacion\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subjects (title) VALUES (\"Ingles\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subjects (title) VALUES (\"Tecnica\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject added");
        console.log(result);
    }
});

//students

sql ="INSERT INTO codenotch_2.students (first_name,last_name,group_id) VALUES (\"jose\",\"Albarracin\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name,last_name,group_id) VALUES (\"jose\",\"Pino\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Laura\",\"Albarracin\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Edgar\",\"Rodriguez\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Beatriz\",\"Luengo\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Jack\",\"Sparrow\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"jose\",\"coronado\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"juan\",\"palomo\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Joan\",\"Capdevila\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});
 sql ="INSERT INTO codenotch_2.students (first_name, last_name, group_id) VALUES (\"Joe\",\"Mandanga\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Student added");
        console.log(result);
    }
});



//teachers

 sql ="INSERT INTO codenotch_2.teachers (first_name,last_name) VALUES (\"Willfred\",\"Alone\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("teacher added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.teachers (first_name,last_name) VALUES (\"Jhon\",\"Smith\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("teacher added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.teachers (first_name,last_name) VALUES (\"Laura\",\"Vert\")";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("teacher added");
        console.log(result);
    }
});

//marks
//student 1

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (1,1,\"2017-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (1,2,\"2017-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (1,3,\"2017-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (1,4,\"2017-06-15\",9)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 2

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (2,1,\"2019-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (2,2,\"2019-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (2,3,\"2019-06-15\",8)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (2,4,\"2019-06-15\",9)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 3

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (3,1,\"2000-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (3,2,\"2019-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (3,3,\"2019-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (3,4,\"2019-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 4

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (4,1,\"2018-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (4,2,\"2018-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (4,3,\"2018-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (4,4,\"2018-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 5

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (5,1,\"2013-06-15\",3)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (5,2,\"2013-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (5,3,\"2013-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (5,4,\"2013-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 6

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (6,1,\"2018-06-15\",9)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (6,2,\"2013-06-15\",1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (6,3,\"2018-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (6,4,\"2018-06-15\",7)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 7

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (7,1,\"2012-06-15\",9)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (7,2,\"2012-06-15\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (7,3,\"2012-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (7,4,\"2012-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 8

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (8,1,\"2009-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (8,2,\"2009-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (8,3,\"2009-06-15\",8)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (8,4,\"2009-06-15\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 9

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (9,1,\"2002-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (9,2,\"2002-06-15\",2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (9,3,\"2002-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (9,4,\"2002-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//student 10

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (10,1,\"2009-06-15\",7)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (10,2,\"2009-06-15\",6)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (10,3,\"2009-06-15\",5)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.marks (student_id,subject_id,date,mark) VALUES (10,4,\"2009-06-15\",4)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mark added");
        console.log(result);
    }
});

//subject teacher

 sql ="INSERT INTO codenotch_2.subject_teacher (subject_id, teacher_id, group_id) VALUES (1,1,1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject teacher added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subject_teacher (subject_id, teacher_id, group_id) VALUES (2,2,1)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject teacher added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subject_teacher (subject_id, teacher_id, group_id) VALUES (3,3,2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject teacher added");
        console.log(result);
    }
});

 sql ="INSERT INTO codenotch_2.subject_teacher (subject_id, teacher_id, group_id) VALUES (4,3,2)";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("subject teacher added");
        console.log(result);
    }
});

//seteo

 sql ="UPDATE codenotch_2.marks SET mark= 0 ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("marks setted to 0");
        console.log(result);
    }
});

//obtencion de nombres y apellidos

 sql ="SELECT first_name,last_name FROM codenotch_2.students ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("nombres y apellidos");
        console.log(result);
    }
});

//obtencion datos profesores

 sql ="SELECT first_name,last_name,teacher_id FROM codenotch_2.teachers ";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("datos profes");
        console.log(result);
    }
});






connection.end();
