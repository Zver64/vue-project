<template>
  <section class="page">
    <div class="container">
			<h2>Data from Wordpress</h2>
			<router-link to='/post'>To single post</router-link>
			<div class="posts">
				<div class="posts__inner">
					<post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></post>
				</div>
			</div>

			<div class="navigation-buttons">
				<button v-if="page > 1" v-on:click="getData(--page)" class="navigation-buttons__button">Предыдущая страница</button>
				<button v-if="page < totalPages" v-on:click="getData(++page)" class="navigation-buttons__button">Следующая страница</button>
			</div>

    </div>
  </section>
</template>

<script>
import Api from "~/services/Api";
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  data() {
    return {
			posts: '',
			title: 'First page in vue',
			page: 1,
			perPage: 2,
			totalPages: null
    }
  },
  mounted() {
		return Api()
			.get('wp/v2/posts?page=' + this.page + '&per_page=' + this.perPage)
			.then(responce => {
					this.posts = responce.data;
					this.totalPages = responce.headers['x-wp-totalpages'];
			})
			.catch( error => {
					console.log(error)
					this.errored = true
			})
	},
	methods: {
		getData(page) {
			return Api()
			.get('wp/v2/posts?page=' + page + '&per_page=' + this.perPage)
			.then(responce => {
					this.posts = responce.data;
					this.totalPages = responce.headers['x-wp-totalpages'];
			})
			.catch( error => {
					console.log(error)
					this.errored = true
			})
		}
	}
}
</script>

<style lang='scss'>

@import 'styles/variables.scss';

.page {
	background-color: $color-main;
}

.container {
  width: 1200px;
	max-width: 100%;
	margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
	flex-direction: column;
}

.posts__inner {
	display: flex;
	flex-wrap: wrap;
}

.navigation-buttons {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	&__button {
		border: none;
		background: none;
		font-size: 18px;
		padding: 5px 10px;
		font-weight: 700;
		border-radius: 3px;
		color: #ffffff;
		background-color: #000;
		cursor: pointer;
	}
}

</style>
