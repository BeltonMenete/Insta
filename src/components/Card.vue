<script setup>
    import { defineProps, ref } from 'vue'

    // Correct way to define a prop named 'post'
    const props = defineProps({
        post: {
            type: Object, // Assuming 'post' will be an object
            required: true, // Or false, depending on your needs
        },
    })
</script>

<template>
    <a-card hoverable style="width: 240px" class="card">
        <template #cover>
            <img :alt="props.post.username" :src="props.post.url" />
        </template>
        <a-card-meta :title="props.post.username">
            <template #description>{{ props.post.caption }}</template>
        </a-card-meta>
    </a-card>
</template>

<style scoped>
    .card {
        margin-bottom: 20px;
    }
</style>
