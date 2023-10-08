let calculateBtn = document.getElementById("calculate_btn");
let prasentAge = document.getElementById("prasent_age")
let person_name = document.getElementById("person_name")
let input_name = document.getElementById("name")
let birthdayInput=document.getElementById("birthdate")

calculateBtn.addEventListener("click",function(){

    if(input_name.value === ''){
        alert("Name Required")
        return;
    }

    if(birthdayInput.value === ""){
        alert("Enter your date of birth")
        return;
    }

// for age calculation     
    
    var  birthDate = birthdayInput.value;
         birthDate=new Date(birthDate)
    
    //     alert(birthDate)

    var todayDate= new Date()
    //alert(todayDate)

    totalAge=Date.now() - birthDate.getTime()
    
    ageYear = new Date(totalAge)
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970)
    console.log(ageYear)

    function ageMonth(){
        if(todayDate.getMonth() >= birthDate.getMonth()){

            if(todayDate.getDate() >= birthDate.getDate()){
                return (todayDate.getMonth() - birthDate.getMonth())
            } else{
                if((todayDate.getMonth() -1) >= birthDate.getMonth()){
                    return ((todayDate.getMonth() -1) - birthDate.getMonth())
                } else{
                    return ((todayDate.getMonth() -1)+12 - birthDate.getMonth())
                }
            }
        }
    }
    console.log(ageMonth())

    function ageDays(){
        if(todayDate.getDate() >= birthDate.getDate()){
            return (todayDate.getDate() - birthDate.getDate())
        }else{
            if(todayDate.getDate() == birthDate.getDate()){
                return (todayDate.getDate() - birthDate.getDate())
            } else{
                var calDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), 0)
                return (todayDate.getDate() + calDate.getDate()) - birthDate.getDate()
            }
        }
    }
    console.log(ageDays())

    person_name.textContent = "Dear " + input_name.value +" your age is"
    prasentAge.innerHTML = ageYear+" Years " + ageMonth() + " Months " + ageDays() + " Days"
})


