const pri = 3;
const seg = 0;
const ter = 7;

let con = false;

if ((pri % 2 === 0 || seg % 2 === 0 || ter % 2 === 0)) {
    con = true;
}

console.log(con);
