 /*
 * Funcionalidad del producto
 */
 /*listar las ciudades*/
 for (ciudad in data) {
     console.log(ciudad);
 }

 for (ciudad in data) {
     console.log( ciudad , '.- ', data[ciudad] );
 }


 //listar las estudiant@s de la generacion
 var obtenerData= function( students, sede, generacion){
   document.getElementByClass("container1").innerHTML="";
   var show = datps[sede]["data-generation"][generacion]["students"];

 for (var i=0 ; i<data-sede.length; i ++) {
     var periodo = data[sede];
      show(sede.length, generation);
     }
 }
/*
 //listar las generaciones
 for (ciudad in data) {
     console.log( ciudad , '.- ', data[ciudad] );
 }


 //listar las estudiant@s de la generacion
 /*for (ciudad in data) {
     console.log( ciudad , '.- ', data[ciudad] );
     var periodo = data[ciudad];
     for (per in periodo) {
         console.log('periodo: ',per );
        var test= console.log('alumnas: ',  data[ciudad][per] );
     }
     */
     /*
     for []
     var matricula= document.getElementById("enrollement");
     var ptext=document.createElement("p");
     var text= document.createTextNode(test);
     ptext.appendChild(text);
     matricula.appendChild(ptext);
 }


 //listar las estudiant@s de la generacion
 for (ciudad in data) {
     console.log( ciudad , '.- ', data[ciudad] );
     var periodo = data[ciudad];
     for (per in periodo) {
         console.log('periodo: ',per );
         console.log('alumnas (datos personales): ',  data[ciudad][per] );
         var students = data[ciudad][per];
         for (student in students ) {
             console.log('student: ', student);
             for (s in student) {
                 console.log(' datos estudiante (Sptrint): ' , data[ciudad][per].students);
             }
         }
     }
 }


 console.log(' datos  de estudiante de CDMX , primer periodo : ' , data['CDMX']['2017-1'].students[0]);
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
*/
