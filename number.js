#!/usr/bin/env node

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

const params = {
    count: 0,
    min: 0,
    max: 100,
    get num() {
        if (this._ === undefined) {
            this._ = Math.round(Math.random()* (params.max - params.min) + params.min);
        }
        return this._;
    } 
}

rl.write(`Угадай число в диапозоне от ${params.min} до ${params.max} \n`);
rl.prompt();

rl.on('line', (input) => {
    if (input > params.max || input < params.min) {
        rl.write(`Число ${input} вне диапазона \n`);
    } else {
        if (input > params.num) {
            rl.write('Меньше \n');
            params.count++;
        } else if (input < params.num) {
            rl.write('Больше \n');
            params.count++;
        } else if (+input === params.num) {
            rl.write(`Отгадано число ${params.num} за ${params.count} попыток`);
            rl.close()
        }
    }
});