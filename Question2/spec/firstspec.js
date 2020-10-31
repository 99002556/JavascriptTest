describe('To test customer', () => {
    let cust = null;
    it('should check name is of valid format', () => {
        const cust = new customer("Royyece", "roy111@gmail.com" , "05-09-2001","1234567890","100");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });
 
    it('should check name has min 5 characters', () => {
        const cust = new customer("Amalanath", "amal456@gmail.com" , "20-12-1995","0023356666","200");
        expect(cust.name.length).toBe(5);
        
    });
    it('should check mail is proper', () => {
        const cust = new customer("Krishanan", "ktuiman112@gmail.com" , "09-01-2020","4562023332","3020");
        let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

        expect(regEx.test(email)).toBe(true);
        
    });
    it('should check phone number', () => {
        const cust = new customer("sayanthana", "sayuuus55@gmail.com" , "10-10-2020","9447988956","4520");
        expect(cust.phone.length).toBe(10);
        
    });
    it('should check bill amount', () => {
        const cust = new customer("Soumnyaa", "ssdfg123@gmail.com" , "18-05-2020","1234567890","600");
        expect(cust.billAmount).toBe(600);
        
    });
    
})