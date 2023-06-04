<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div class="container-xxl">
            <a class="navbar-brand" href="#">Wai Phyo</a>
            <div>
                <ul class="navbar-nav">
                    <li 
                        class="nav-item"
                        v-for="(page, index) in pages"
                        :key="index"
                    >
                        <!-- <a 
                            class="nav-link" 
                            :class="{active: activePage == index}" 
                            aria-current="page" 
                            :href="page.link.url"
                            @click.prevent="navLinkClick(index)"
                        >{{ page.link.text }}</a> -->
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