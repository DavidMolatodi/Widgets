document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtimeWidget', function () {
        return {
            AirtimeMessage: '',
            AirtimeUsage: '',
            AvailableAmount: '0.00',
            calculate() {
                this.AirtimeMessage = enoughAirtime(this.AirtimeUsage, this.AvailableAmount)
                setTimeout(() => {
                    this.AirtimeMessage = '';
                    this.AirtimeUsage = '';
                    this.AvailableAmount = '0.00';
                }, 3000);

            }
        }
    })
})


