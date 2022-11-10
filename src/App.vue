<template>
    <p class="head">Search Anime By Keyword</p>
    <div class="container">
        <Input v-model="query" size="large" placeholder="Enter something..." style="width: 30%;" />
        <Button @click="handleSearch()" size="large" type="primary">Search</Button>
    </div>
    <div class="box">
        <Row type="flex" justify="space-around" style="padding: 20px; margin: 10px;">
            <Card v-for="anime in animes" @click="handleClicked(anime.url)" :key="anime.mal_id" class="card">
                <template #title><p>{{ anime.title }}</p></template>
                <Row>
                    <!-- <p>{{ anime.synopsis }}</p> -->
                    <img :src="anime.images.jpg.image_url" class="img">
                </Row>
            </Card>
        </Row>
    </div>
</template> 

<script>
import axios from 'axios'

export default {
    data() {
        return {
            query: '',
            animes: []
        }
    },
    methods: {
        handleSearch() {
            console.log('search manga key', this.query)
            const url = `https://api.jikan.moe/v4/anime?q=${this.query}`
            axios.get(url).then(res => {
                console.log(res.data.data)
                this.animes = res.data.data
            })
        },
        handleClicked(url) {
            console.log(url)
            window.location.assign(url)
        }
    }
}
</script>

<style scope>
.container {
    display: flex;
    justify-content: center;
    margin: 40px auto;
}
.head {
    text-align: center;
    padding-top: 30px;
    font-size: 16px;
}
.box {
    margin-left: 60px;
    margin-right: 60px;
    padding: 10px;

}
.card {
    width: 320px; 
    margin-bottom: 20px;
    cursor: pointer;
}
.img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 320px;
    padding: 10px;
}
</style>