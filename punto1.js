//  Constantes: Agrega precio fijo a los precios y al numero de personas del plan.
const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;
const CANTIDAD_PERSONAS = 4;
const APORTE_INDIVIDUAL = 130000;

//  Variables: se calcula el gasto total, el gasto por persona y la sobra por persona.
let totalgastos = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;
let gastoporpersona = totalgastos / CANTIDAD_PERSONAS;
let sobranteporpersona = APORTE_INDIVIDUAL - gastoporpersona;

//  Muestra el resultado de los anteriores calculos
console.log(`
El gasto total del viaje es de $${totalgastos}
El gasto por persona es de $${gastoporpersona}
El sobrante por persona es de $${sobranteporpersona}`)