<template>
    <flat-pickr v-model="date"/>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    export default {
        name: 'Calendar',
        data() {
            return {
                date: null,
            }
        },
        components: {
            flatPickr
        }
    }
</script>