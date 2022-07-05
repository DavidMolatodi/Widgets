

document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function () {
        return {
            name: '',
            message: '',
            showGreeting: false,
            greetMe() {
                this.message = greet(this.name);
                this.showGreeting = true;
                setTimeout(() => {
                    this.message = '';
                    this.name= '',
                    this.showGreeting = false;
                }, 3000);
            }
        }
    })
})