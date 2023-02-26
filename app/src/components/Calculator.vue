<script setup>
import { ref } from 'vue';
import { calculate } from '../helpers/Calculation';

const label = ref('');
const digit = ref(-1);
const operator = ref('');

const selectDigit = (value) => {
    digit.value = value;
    if (label.value === 'Error') label.value = '';
    label.value += value.toString();
}

const selectOperator = (op) => {
    operator.value = op;
    label.value += op;
}

const updateCalculation = (event) => {
    if (event === 'C') label.value = '';
    else if (event === 'DEL') label.value = label.value.substring(0, label.value.length - 1);
    else if (event === 'OK') {
        label.value = calculate(label.value);
    }
}

</script>

<template>
    <div>
        <div class="bg-gray-300 w-fit rounded-full mt-5 mx-auto px-2 py-2">
            <h1 class="text-2xl text-center">Calculator</h1>
        </div>
        <div class="border border-1 border-gray-700 w-96 rounded-lg px-2 py-2 mx-auto mt-5">
            <div class="bg-gray-300 w-fit rounded-lg w-full h-12 mx-auto px-2 py-2">
                <p>{{ label }}</p>
            </div>
            <div class="flex flex-row mt-5">
                <button class="bg-gray-900 text-white rounded-lg w-full text-center"
                    @click="updateCalculation('C')">C</button>
                <button class="bg-red-500 text-white rounded-lg w-full text-center"
                    @click="updateCalculation('DEL')">DEL</button>
                <button class="bg-green-500 text-white rounded-lg w-full text-center"
                    @click="updateCalculation('OK')">OK</button>
            </div>
            <div>
                <button @click="selectDigit(0)">0</button>
                <button @click="selectDigit(1)">1</button>
                <button @click="selectDigit(2)">2</button>
                <button @click="selectDigit(3)">3</button>
                <button @click="selectDigit(4)">4</button>
                <button @click="selectDigit(5)">5</button>
                <button @click="selectDigit(6)">6</button>
                <button @click="selectDigit(7)">7</button>
                <button @click="selectDigit(8)">8</button>
                <button @click="selectDigit(9)">9</button>
            </div>
            <div>
                <button @click="selectOperator('+')">+</button>
                <button @click="selectOperator('-')">-</button>
                <button @click="selectOperator('*')">x</button>
                <button @click="selectOperator('/')">/</button>
            </div>

        </div>
</div></template>