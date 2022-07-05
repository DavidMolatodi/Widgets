document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget',function(){
        return {
            TPhoneBill: '',
            CallNSms: '',
            calculate () {
             this.TPhoneBill= totalPhoneBill(this.CallNSms) 
             setTimeout(() => {
                this.CallNSms= '';
                this.TPhoneBill= '';
            }, 3000);  
            }
          }
    })
})