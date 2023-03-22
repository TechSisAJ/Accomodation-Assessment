function calculatePrice(month, stays) {
    let totalStudio = totalapartment =0
    let apartmentPrice = 76
    let studioPrice = 77
    if (typeof month  !== 'string') {
      console.log ("kindly enter a valid string for month");
      return false;
    }
    if (isNaN(stays)) {
      console.log ("kindly enter a valid number for stay");
      return false;
    }

    let months = ['May', 'June', 'July', 'August', 'September', 'october']
    if (!months.includes(month)) {
        console.log ("kindly enter a valid string for month");
        return false;
    }
    if (month ==='May' || month === 'october') {
        if (stays < 1 || stays > 31) {
            console.log ("kindly enter a valid number of days not less than 1 and not greater than 31");
            return false;
        }
        studioPrice = 50;
        apartmentPrice = 65;
        totalStudio = (stays > 7 && stays <= 14) ? (studioPrice * stays) - (studioPrice * stays * .05)
                             :stays > 14 ? (studioPrice * stays) - (studioPrice * stays * .3) 
                             :studioPrice * stays
        
        totalapartment= stays > 14 ? (apartmentPrice * stays) - (apartmentPrice * stays * .1) 
                              :apartmentPrice * stays
    } else if (month ==='June' || month === 'September') {
        if (stays < 1 || stays > 30) {
            console.log ("kindly enter a valid number of days not less than 1 and not greater than 30");
            return false;
        }
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        totalStudio = stays > 14 ? (studioPrice * stays) - (studioPrice * stays * .2) 
                             :studioPrice * stays
        totalapartment= stays > 14 ? (apartmentPrice * stays) - (studioPrice * stays * .1) 
                               :apartmentPrice * stays
    }else if (month ==='July' || month === 'August'){
        if (stays < 1 || stays> 31) {
            console.log ("kindly enter a valid number of days not less than 1 and not greater than 30");
            return false;
        }
        studioPrice = 76;
        apartmentPrice = 77;
        totalStudio = studioPrice * stays
        totalapartment= stays > 14 ? (apartmentPrice * stays) - (apartmentPrice * stays * .1) 
                              :apartmentPrice * stays
    }
    
    console.log(`Apartment: ${totalapartment.toFixed(2)} NGN`);
    console.log(`Studio: ${totalStudio.toFixed(2)} NGN`); 
}
calculatePrice('May', 15);
calculatePrice('June', 14);
calculatePrice('August', 20);
