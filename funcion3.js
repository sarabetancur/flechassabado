let temperatura1=5;
let temperatura2=56;
let temperatura3=12;
let temperatura4=1;


/*if (temperatura1>temperatura2 && temperatura3 && temperatura4){
   temperaturaMaxima=temperatura1;
}else if(temperatura2>temperatura1 && temperatura3 && temperatura4){
    temperaturaMaxima=temperatura2;
}else if(temperatura3>temperatura1 &&temperatura2 &&temperatura4){
    temperaturaMaxima=temperatura3;
}else(temperatura4>temperatura1 && temperatura2 && temperatura3)
    temperaturaMaxima=temperatura4;

console.log(temperaturaMaxima);*/

/*temperaturaMaxima=Math.max([temperatura1],[temperatura2],[temperatura3],[temperatura4]);
temperaturaMinima=Math.min([temperatura1],[temperatura2],[temperatura3],[temperatura4]);

console.log(temperaturaMaxima);
console.log(temperaturaMinima);*/

//let temperaturas[24,20,6,5];
function calcularTemperaturaMaxima(temperatura1, temperatura2, temperatura3, temperatura4){
    return (Math.max(temperatura1,temperatura2,temperatura3,temperatura4));
}
function calcularTemperaturaMinima(temperatura1, temperatura2, temperatura3, temperatura4){
    return (Math.min(temperatura1,temperatura2,temperatura3,temperatura4));
}
let temperaturaMaxima=calcularTemperaturaMaxima(5,8,46,-13);
let temperaturaMinima=calcularTemperaturaMinima(5,8,46,-13);

console.log(`El promedio de temperatura es ${temperaturaMaxima+temperaturaMinima/2}°`);
