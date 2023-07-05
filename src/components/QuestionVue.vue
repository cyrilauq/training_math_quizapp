<template>
    <div>
        <TrueOrFalseVue 
            v-if="question?.type === QuestionType.TRUE_OR_FALSE" 
            :question="question"
        />
        <OneChoiceVue 
            v-if="question?.type === QuestionType.ONE_CHOICE" 
            :question="question"
        />
    </div>
</template>

<script setup lang="ts">
    import { Question } from '@/modules/questions/Question'
    import { QuestionType } from '@/modules/questions/QuestionType'
    import TrueOrFalseVue from '@/components/question/TrueOrFalseVue.vue'
    import OneChoiceVue from '@/components/question/OneChoiceVue.vue'

    const props = defineProps({
        question: Question
    })

    console.log(props.question);
    
</script>

<style scoped>

</style>