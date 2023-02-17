class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {
        if(this.marks>40){
            console.log("true");
        }else{
            console.log("false");
        }
        
        
       //return a function which takes in argument -> minMarks
       //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
       //Complete this function only. Do not alter any other thi
       }
       checkFoePlacements(min_marks){
           return(min_age)=>{
               if(this.marks>min_marks && this.age>min_age){
                   console.log(`${this.name} is not eligible for placement`)
               }
           }
       }
  }
  const S1=new Student('com', 18,50);
  console.log(S1.marks)
  S1.setPlacementAge()
  S1.checkFoePlacements(18,50)