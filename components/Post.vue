<template>
	<div class="post">
		<div class="post__title">{{ post.title.rendered }}</div>
		<div class="post__cont" v-html="post.content.rendered"></div>
	</div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang='scss'>
.post {
	display: block;
	width: 300px;
	padding: 15px;
	max-width: 100%;
	img {
		display: none;
	}
}
</style>