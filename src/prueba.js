const mesActual = 10;
const anoActual = 2023;

const mesAnterior = mesActual - 1; //9

if (mesAnterior == 0) {
  // 9==0
  mesAnterior = 12;
  anoActual = anoActual - 1; //2022
} else {
  mesAnterior = mesActual; //9
  anoActual = anoActual; //2023
}
