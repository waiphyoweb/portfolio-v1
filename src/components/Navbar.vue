<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
        <div class="container-xxl">
            <a class="navbar-brand fs-2" href="#">Wai Phyo</a>
            <div>
                <ul class="navbar-nav">
                    <li 
                        class="nav-item fs-4 p-2"
                        v-for="(page, index) in pages"
                        :key="index"
                    >
                        <router-link 
                            :to="page.link.url" 
                            @click.prevent="navLinkClick(index)" 
                            class="nav-link"
                            :class="{active: activePage == index}"
                        >{{ page.link.text }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        props: [ 'pages', 'activePage', 'navLinkClick'],
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
.navbar-brand {
    font-family: 'Monoton', cursive;
}
</style>