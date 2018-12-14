var total = 0;

var john = {
    fullName: 'John Smith',
    bills: [77, 375, 110, 45],
    calcTips: function() {    
        this.tips = [];
        this.finalValues = [];
        
        for (var i=0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (this.bills[i] < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {               // if more than $300
                percentage = 0.25;
            }     
            
            // Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
            
        }
    }
}

function calcAverage(name) {
    for (var i=0; i <= name.finalValues[i]; i++) {
        console.log("This is a test");
    }
}

calcAverage(john);