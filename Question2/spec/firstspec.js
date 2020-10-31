describe('To test class customer', () => {
    let cust = null;
    it('should check name is of valid format', () => {
        const cust = new customer("Riya", "riyak438@gmail.com" , "10-01-2020","1234567890","500");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });
 
    it('should check whether name has min 5 characters', () => {
        const cust = new customer("Soumnya", "sssoumyaa@gmail.com" , "09-12-1995","9447988956","450");
        expect(cust.name.length).toBe(5);
        
    });
    
    it('should check if email is of valid format', () => {
        const cust = new customer("Divyamm", "divya@gmail.com" , "03-12-2005","1234567890","600");
        expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"); 
        
    });
 
    it('should check if phone number is valid', () => {
        const cust = new customer("Krishnan", "krishnakumar@gmail.com" , "10-12-2020","8281268966","600");
        expect(cust.phone).toMatch("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"); 
        
    });
 
    it('should check bill amount is min 500', () => {
        const cust = new customer("Sangeetha", "sangeetha05@gmail.com" , "10-12-2020","8865475826","8000");
       expect(cust.billAmount).toBeGreaterThan(500);
        
    });
 
    it('should check if bill date is not more than one month old', () => {
        const cust = new customer("Lieoiyt", "leoty25y@gmail.com" , "15-10-2020","8281268966","600");
        let date = cust.billDate;
        let x = getDate(date);
        let y = (x-1)*60 * 60 * 1000*24*30;
        let z = 60 * 60 * 1000*24*30;
        expect(y).toBeLesserThan(z);        
        
    });
    
});
