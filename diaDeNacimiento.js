const days = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'sabado'
}
let birthday = new Date(2001, 02, 13);
console.log(days[birthday.getDay()]);
