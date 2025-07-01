<script setup>
    import { ref, defineProps } from 'vue'

    const open = ref(false)
    const props = defineProps(['isLogin'])

    const showModal = () => {
        open.value = true
    }
    const title = props.isLogin ? 'Login' : 'Sign up'

    const handleOk = (e) => {
        console.log(e)
        open.value = false
    }
</script>

<template>
    <div>
        <a-button @click="showModal" :type="props.isLogin ? 'primary' : 'default'">{{ title }}</a-button>
        <a-modal v-model:open="open" :title="title" @ok="handleOk">
            <a-input class="input" v-if="!props.isLogin" placeholder="Username" />
            <a-input class="input" type="email" placeholder="E-mail" />
            <a-input-password class="input" placeholder="Password" />
            <a-input-password class="input" v-if="!props.isLogin" placeholder="Confirm Password" />
        </a-modal>
    </div>
</template>
<style scoped>
    button {
        margin: 0 5px;
    }
    .input {
        margin-top: 5px;
    }
</style>
