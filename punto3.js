// CONSTANTE

// Produccion por hora
const produccion = 250
// Horas de trabajo
const horas_chamba = 8
// Cantidad de piezas de una caja
const piezas_12 = 12


// VARIABLE

// Se calcula el tota de postes fabricados por las horas trabajadas
let piezas_fabricadas = produccion * horas_chamba
// Calcula cuantas cajas de docena s elogran completar 
let cajas_llenas = parseInt(piezas_fabricadas/piezas_12)
// Calcula cuantas unidades quedan fuera de la docena
let unidades_sueltas = piezas_fabricadas % piezas_12; 

// Muesra el resultado
console.log(`
El total de piezas fabricadas es de ${piezas_fabricadas}
Se lograron completar ${cajas_llenas} cajas de docena
Quedaron ${unidades_sueltas} piezas fuera de la docena`)