<template>
    <div class="container-lg text-center my-5 p-5">
        <div class="mb-5">
            <p class="fs-5">Thank you for visiting my portfolio. I appreciate your time and consideration. Feel free to reach out to me for any inquiries or opportunities. I look forward to connecting with you! Have a good day and I hope you get some enjoyment with this joke.</p>
        </div>
        <div class="shadow rounded bg-dark text-white p-5">
            <h2 class="mb-5">Today's Joke</h2>
            <h5 class="mb-5">{{joke}}</h5>
            <button 
                @click="fetchJoke()"
                class="btn btn-outline-light"
            >Get Another Joke</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                joke: '',
            };
        },
        created() {
            this.fetchJoke();
        },
        methods: {
            fetchJoke() {
                fetch('https://v2.jokeapi.dev/joke/Programming')
                    .then(response => response.json())
                    .then(data => {
                        this.joke = data.joke || data.setup + ' ' + data.delivery;
                        })
                        .catch(error => {
                        console.error(error);
                    });
            },
        },
    };
</script>