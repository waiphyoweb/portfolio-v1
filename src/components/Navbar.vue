<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
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