<script setup lang="ts">
    import QuestionsListVue from './components/QuestionsListVue.vue'
    import { questions } from './modules/questions';
</script>

<template>
    <QuestionsListVue :questions="questions" />
</template>

<style scoped>

</style>
