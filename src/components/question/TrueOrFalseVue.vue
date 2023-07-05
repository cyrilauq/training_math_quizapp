<template>
    <QuestionBaseVue>
        <template v-slot:title>
            {{ question?.title }}
        </template>
        <template v-slot:question>
            {{ question?.question }}
        </template>
        <template v-slot:buttons>
            <button>True</button>
            <button>False</button>
        </template>
    </QuestionBaseVue>
</template>

<script setup lang="ts">
    import QuestionBaseVue from './QuestionBaseVue.vue'

    import { Question } from '@/modules/questions/Question'

    const props = defineProps({
        question: Question
    })
</script>

<style scoped>

</style>