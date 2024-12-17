#!/usr/bin/env node

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

const params = {
    count: 0,
    min: 100,
    max: 200,
    get hiddenNum() {
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
        if (input > params.hiddenNum) {
            rl.write('Меньше \n');
            params.count++;
        } else if (input < params.hiddenNum) {
            rl.write('Больше \n');
            params.count++;
        } else if (+input === params.hiddenNum) {
            rl.write(`Отгадано число ${params.hiddenNum} за ${params.count} попыток`);
            rl.close()
        }
    }
});