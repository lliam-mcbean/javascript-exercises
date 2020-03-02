function tipCalculator(bill) {
    switch(bill) {
        case (bill < 50):
            return bill * 0.2;  
         case (bill >= 50) && (bill<200):
            return bill * 0.15;
        case (bill > 100):
            return bill * 0.2      
        default:
            console.log('this statement is empty');
    }
};
 
console.log(tipCalculator(125));
