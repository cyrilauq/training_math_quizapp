<script setup lang="ts">
    import QuestionsListVue from './components/QuestionsListVue.vue'
    import { questions } from './modules/questions'
    import HeaderVue from './components/global/HeaderVue.vue'
</script>

<template>
    <HeaderVue />
    <QuestionsListVue :questions="questions" />
</template>

<style scoped>

</style>
