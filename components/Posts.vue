<template>
    <div class="posts">
        <div class="posts__data">{{ posts[0].id }}</div>
    </div>
</template>

<script>
    import Api from '~/services/Api'
    export default {
        data() {
            return {
                posts: ''
            }
        },
        mounted() {
            return Api()
                .get('wp/v2/posts')
                .then(responce => {
                    this.posts = responce.data;
                })
                .catch( error => {
                    console.log(error)
                    this.errored = true
                })
        }
    }    
</script>

<style>

</style>
