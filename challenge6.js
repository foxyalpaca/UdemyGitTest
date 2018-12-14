var total = 0;  // Initialize total to 0

// New test for Git Hub

var john = {
    fullName: 'John Paul',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {    
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (this.bills[i] < 50) {
                percentage = 0.20;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }     
            
            // Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}

john.calcTips();
console.log(john);