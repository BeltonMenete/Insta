<script setup>
    import Card from './Card.vue'
    import Container from './Container.vue'

    const data = [
        {
            id: 1,
            username: 'SelenaGomez',
            url: 'https://imageio.forbes.com/specials-images/imageserve/68388b9cf86dd2c246cf60ef/0x0.jpg?format=jpg&crop=1027,1028,x642,y278,safe&height=416&width=416&fit=bounds',
            caption: '',
        },
        {
            id: 2,
            username: 'TheWeeknD',
            url: 'https://imageio.forbes.com/specials-images/imageserve/56705443e4b0ffa7afe82c53/0x0.jpg?format=jpg&height=1200&width=400&fit=bounds',
            caption: 'Hello guys',
        },
    ]
</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="post in data" :key="post.id" :post="post" />
        </div>
    </Container>
</template>

<style scoped>
    .timeline-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
</style>
