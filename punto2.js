// CONSTANTE: tiempo total registrado en segundos
const SEGUNDOS = 7200; // Tiempo total de actividad física en segundos


// VARIABLES: conversiones de tiempo

// Se calcula cuántos días completos hay en los segundos registrados
let dias = parseInt(SEGUNDOS / 86400);
// Se calcula cuántas horas completas hay después de descontar los segundos usados en días
let horas = parseInt((SEGUNDOS - (dias * 86400)) / 3600);
// Se calcula cuántos minutos completos hay después de descontar los segundos usados en días y horas
let minutos = parseInt((SEGUNDOS - (dias * 86400) - (horas * 3600)) / 60);

// Muestra el resultado de los cálculos anteriores
console.log(`En ${SEGUNDOS} segundos, hay ${dias} días, ${horas} horas, ${minutos} minutos.`);
