<script setup>
    import { ref } from 'vue'
    import Container from './Container.vue'
    import AuthModal from '@/components/AuthModal.vue'
    const searchUsername = ref('')
    const isAuthenticated = ref(false)
    const onSearch = function () {}
</script>

<template>
    <a-layout class="layout">
        <a-layout-header>
            <Container>
                <div class="nav-container">
                    <div class="left-content">
                        <router-link to="/">Instagram</router-link>
                        <a-input-search
                            v-model:value="searchUsername"
                            placeholder="username..."
                            style="width: 200px"
                            @search="onSearch"
                        />
                    </div>
                    <div class="right-content" v-if="!isAuthenticated">
                        <AuthModal :isLogin="false" />
                        <AuthModal :isLogin="true" />
                    </div>
                    <div class="right-content" v-else>
                        <a-button type="default">Profile</a-button>
                        <a-button type="primary">Log out</a-button>
                    </div>
                </div>
            </Container>
        </a-layout-header>
    </a-layout>
</template>
<style scoped>
    .nav-container {
        display: flex;
        justify-content: space-between;
    }
    .left-content {
        display: flex;
        align-items: center;
    }
    .left-content a {
        margin-right: 20px;
    }

    .right-content {
        display: flex;
        align-items: center;
    }

    .right-content button {
        margin-left: 10px;
    }
</style>
