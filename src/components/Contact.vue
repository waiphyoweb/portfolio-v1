<template>
    <div class="container-lg shadow rounded text-center p-5">
        <p class="fs-5">Explore my portfolio for examples of my work and let's discuss how I can bring value to your next project.</p>
        <form ref="form" @submit.prevent="sendEmail">
            <div class="form-group">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" name="from_name">
                    <label for="floatingInput">Name</label>
                  </div>
            </div>
            <div class="form-group">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="from_email">
                    <label for="floatingInput">Email</label>
                  </div>              
            </div>
            <div class="form-group">
                <div class="form-floating mb-3">
                    <textarea type="text" class="form-control" id="floatingInput" placeholder="Message" name="message"></textarea>
                    <label for="floatingInput">Message</label>
                  </div>              
            </div>
            <input class="btn btn-dark btn-lg" type="submit" value="Send">
        </form>
    </div>
  </template>
  
  <script>
  import emailjs from '@emailjs/browser';
  
  export default {
    methods: {
      sendEmail() {
        emailjs.sendForm('service_78z9sfb', 'template_38v2dtb', this.$refs.form, '_2pgj4bW59jBu7sRg')
          .then((result) => {
              alert('SUCCESS!', result.text);
          }, (error) => {
              alert('FAILED...', error.text);
          });
      }
    }
  }
</script>
  
<style scoped>
.container-lg {
  margin-top: 150px;
}
</style>
  