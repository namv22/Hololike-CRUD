<template>
<div id="app">
    <div>
        <h3>Name: </h3>
        <input type="text" v-model="newName">
        <h3>Youtube ID: </h3>
        <input type="text" v-model="newYT">
        <h3>Tag: </h3>
        <input type="text" v-model="newTag">
        <button @click="addPost">
            Add Post
        </button>
    </div>
    <ul class="reptileList">
        <li v-for="post in posts" v-bind:key="post.name">
            {{ post.name }} -
            <button @click="deletePost(post)">
                Remove
            </button>
        </li>
    </ul>
</div>
</template>

<script>
import {
    db
} from './firebase';

export default {
    name: 'app',
    data() {
        return {
            posts: [],
            newName: '',
            newYT: '',
            newTag:'',
        }
    },
    firestore() {
        return {
            posts: db.collection('holoposts'),
        }
    },
    methods: {
        addPost: function () {
            this.$firestore.posts.add({
                name: this.newName,
                yturl: this.newYT,
                tag: this.newTag,
                date: new Date()
            });
            this.newName = '';
            this.newYT = '';
            this.newTag = '';
        },
        deletePost: function (post) {
            this.$firestore.posts.doc(post['.key']).delete();
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.reptileList {
    list-style: none;
}
</style>
