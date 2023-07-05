<template>
    <div>
        <ProgressBarVue />
        <QuestionVue v-for="question in questions"
            :key="question.title"
            :question="question"
        />
    </div>
</template>

<script setup lang="ts">
    import { Question } from '@/modules/questions/Question'
    import ProgressBarVue from './ProgressBarVue.vue'
    import QuestionVue from './QuestionVue.vue'

    const props = defineProps<{
        questions: Question[]
    }>()

</script>

<style scoped>

</style>