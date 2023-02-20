<script setup>
    import { ref } from 'vue';

    const label = ref('');
    const digit = ref(-1);

    const selectDigit = (value) => {
        digit.value = value;
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
        </div>
        <p>{{ digit }}</p>
    </div>
    

</template>