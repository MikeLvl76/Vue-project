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
    else if (event === '=') {
        label.value = calculate(label.value);
    }
}

</script>

<template>
    <div>
        <div class="border border-1 border-gray-700 w-64 rounded-lg px-2 py-2 mx-auto mt-5">
            <div class="bg-gray-300 w-fit rounded-lg w-full h-12 mx-auto px-2 py-2">
                <p class="text-right">{{ label }}</p>
            </div>
            <div class="flex flex-row space-x-5 mt-5 justify-center">
                <div class="grid grid-cols-3 gap-2">
                    <li v-for="i in 9" class="list-none">
                        <button class="bg-gray-900 text-white px-2 py-2 w-full rounded-lg" @click="selectDigit(i)">{{ i
                        }}</button>
                    </li>
                    <button class="bg-gray-900 text-white px-2 py-2 rounded-lg w-full" @click="selectDigit(0)">0</button>
                    <button class="bg-gray-500 text-white px-2 py-2 rounded-lg w-full"
                        @click="updateCalculation('C')">C</button>
                    <button class="bg-red-500 text-white rounded-lg px-2 py-2 w-fit"
                        @click="updateCalculation('DEL')">DEL</button>
                </div>
                <div class="flex flex-col">
                    <button class="bg-blue-500 text-white px-1 py-1 rounded-full w-8 mb-1 mt-1" @click="selectOperator('+')">+</button>
                    <button class="bg-blue-500 text-white px-1 py-1 rounded-full w-8 mb-1 mt-1" @click="selectOperator('-')">-</button>
                    <button class="bg-blue-500 text-white px-1 py-1 rounded-full w-8 mb-1 mt-1" @click="selectOperator('*')">x</button>
                    <button class="bg-blue-500 text-white px-1 py-1 rounded-full w-8 mb-1 mt-1" @click="selectOperator('/')">/</button>
                    <button class="bg-green-500 text-white rounded-full w-8"
                        @click="updateCalculation('=')">=</button>
                </div>
            </div>
        </div>
    </div>
</template>