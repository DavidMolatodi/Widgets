document.addEventListener('alpine:init', () => {
    Alpine.data('whichShiftWidget',function(){
        return  {
            WhichShift: '',
            transFee: '',
            calculate () {
              this.transFee = transportFee(this.WhichShift)
              setTimeout(() => {
                  this.WhichShift= '';
                  this.transFee= '';
              }, 3000); 
            }  
      
            }
    })
})