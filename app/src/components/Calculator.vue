<script setup>
import { ref } from 'vue';

const label = ref('');
const digit = ref(-1);
const operator = ref('');

const selectDigit = (value) => {
    digit.value = value;
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
        console.log(label.value)
    }
}

</script>

<template>
    <div>
        <div>
            <h1>Calculator</h1>
        </div>
        <div>
            <div>
                <p>{{ label }}</p>
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
                <button @click="selectOperator('x')">x</button>
                <button @click="selectOperator('/')">/</button>
            </div>
            <div>
                <button @click="updateCalculation('C')">C</button>
                <button @click="updateCalculation('DEL')">DEL</button>
                <button @click="updateCalculation('OK')">OK</button>
            </div>
        </div>
    </div>
</template>