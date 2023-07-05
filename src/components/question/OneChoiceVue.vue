<template>
    <QuestionBaseVue>
        <template v-slot:title>
            {{ question?.title }}
        </template>
        <template v-slot:buttons>
            <button
                v-for="answer in question?.answers"
                :key="answer"
            >
                {{ answer }}
            </button>
        </template>
    </QuestionBaseVue>
</template>

<script setup lang="ts">
    import { Question } from '@/modules/questions/Question'

    import QuestionBaseVue from './QuestionBaseVue.vue'

    const props = defineProps({
        question: Question
    })
</script>

<style scoped>

</style>