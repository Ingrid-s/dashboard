
for (ciudad in data) {
    console.log(ciudad);
}

//listar las generaciones
for (ciudad in data) {
    console.log( ciudad , '.- ', data[ciudad] );
}


//listar las estudiant@s de la generacion
for (ciudad in data) {
    console.log( ciudad , '.- ', data[ciudad] );
    var periodo = data[ciudad];
    for (per in periodo) {
        console.log('periodo: ',per );
        console.log('alumnas: ',  data[ciudad][per] );
    }
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
