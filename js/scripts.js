const { createApp } = Vue;

createApp({
    data() {
        return {
            awesome: true,
            age: 32,
            h1Classes: 'color-green'
        };
    }
}).mount('#app');