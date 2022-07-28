// function submitProjectDetails() {
//     var SchemeName = document.getElementById("SName")
//     var ScholarshipType = document.getElementById("SType")
//     var ScholarshipGrade = document.getElementById("SGrade")
//     var Category = document.getElementById("Category")
//     var Eligibility = document.getElementById("Eligibility")
//     var RequiredDoc = document.getElementById("RDoc")
//     var TimeLimit = document.getElementById("TLimit")
//     let see = 0
//  // project name validation
//     if (SchemeName.value == "") {
//         see = see+1;
//     } else {
//         alert(SchemeName.value);
//     }
//     if (ScholarshipType.value == "") {
//         see = see+1;
//     } else {
//         alert(ScholarshipType.value);
//     }
//     if (ScholarshipGrade.value == "") {
//         see = see+1;
//     } else {
//         alert(ScholarshipGrade.value);
//     }
//     if (Category.value == "") {
//         see = see+1;
//     } else {
//         alert(Category.value);
//     }
//     if (Eligibility.value == "") {
//         see = see+1;
//     } else {
//         alert(Eligibility.value);
//     }
//     if (RequiredDoc.value == "") {
//         see = see+1;
//     } else {
//         alert(RequiredDoc.value);
//     }
//     if (TimeLimit.value == "") {
//         see = see+1;
//     } else {
//         alert(TimeLimit.value);
//     }
    
    
//     // Assigned to validation
//     var person = pAssigned.options[pAssigned.selectedIndex].value;
//     if (person == "" || person=="Select") {
//         alert("Project Assigned to field cannot be empty");
//     } else {
//         alert(pAssigned.options[pAssigned.selectedIndex].value);
//     }
//   // Date validation
//     // start date
//     if (sDate.value == "") {
//         alert(" Please Enter the Starting date");
//     } else {
//         alert(document.getElementById("SDate").value);
//     }
//     // End date
//     if (eDate.value == 0) {
//         alert("Please enter the end date ");
//     } else {
//         alert(document.getElementById("EDate").value);
//     }
//    //priority validation
//     var Prior = document.querySelector('input[name="priority"]:checked');

//     if (Prior != null) {
//         alert("The priority of project is:" + Prior.value);

//     } else {
//         alert("You did not select the priority of the project");
//     }
// // description validation

//     if (Description.value == "") {
//         alert("You did not write the project description");
//     } else {
//         alert(document.getElementById("description").value);
//     }
// }
function resetProjectDetails() {
    document.getElementById("PName").value = '';
    document.getElementById("projectAssigned").value = 'Select';
    document.getElementById("SDate").value = '';
    document.getElementById("EDate").value = '';
    document.querySelector('input[name="priority"]').value = '';
    document.getElementById("description").value = '';
}
function myFunction() {
			i=0;
            var SchemeName = document.getElementById("SName")
            var ScholarshipType = document.getElementById("SType")
            var ScholarshipGrade = document.getElementById("SGrade")
            var Category = document.getElementById("Category")
            var Eligibility = document.getElementById("Eligibility")
            var RequiredDoc = document.getElementById("RDoc")
            var TimeLimit = document.getElementById("TLimit")
            var Scholarship = document.getElementById("Scholarship")
            var description = document.getElementById("description")
		
		var letters = /^[A-Za-z]+$/;
		  var error1 = document.getElementById("e1")
		  var error2 = document.getElementById("e2")
		  var error3 = document.getElementById("e3")
		  var error4 = document.getElementById("e4")
          var error5 = document.getElementById("e5")
          var error6 = document.getElementById("e6")
          var error7 = document.getElementById("e7")
          var error8 = document.getElementById("e8")
          var error9 = document.getElementById("e9")
		//   var email= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  
		
		  
		if(SchemeName.value.match(letters)  && SchemeName.value!="")
		 {
			error1.textContent = ""
			i+=1
		 }
	   else
		 {
			error1.textContent = "Please enter a valid SchemeName(no numaric)"
            error1.style.color = "red"
		 }

         if(ScholarshipType.value.match(letters)  && ScholarshipType.value!="")
		 {
			error2.textContent = ""
			i+=1
		 }
	   else
		 {
			error2.textContent = "Please enter a valid ScholarshipType"
				error2.style.color = "red"
		 }
		 
         if(ScholarshipGrade.value.match(letters)  && ScholarshipGrade.value!="")
		 {
			error3.textContent = ""
			i+=1
		 }
	   else
		 {
			error3.textContent = "Please enter a valid ScholarshipGrade"
				error3.style.color = "red"
		 }
         if( Scholarship.value!="")
		 {
			error4.textContent = ""
			i+=1
		 }
	   else
		 {
			error4.textContent = "Please enter a valid Year of Scholarship"
				error4.style.color = "red"
		 }


         if(Category.value.match(letters)  && Category.value!="")
		 {
			error5.textContent = ""
			i+=1
		 }
	   else
		 {
			error5.textContent = "Please enter a valid Category"
				error5.style.color = "red"
		 }

         if(Eligibility.value.match(letters)  && Eligibility.value!="")
		 {
			error6.textContent = ""
			i+=1
		 }
	   else
		 {
			error6.textContent = "Please enter a valid Eligibility"
            error6.style.color = "red"
		 }

         if(RequiredDoc.value.match(letters)  && RequiredDoc.value!="")
		 {
			error7.textContent = ""
			i+=1
		 }
	   else
		 {
			error7.textContent = "Please enter a valid RequiredDoc"
				error7.style.color = "red"
		 }
         TimeLimit

         if(TimeLimit.value.match(letters)  && TimeLimit.value!="")
		 {
			error8.textContent = ""
			i+=1
		 }
	   else
		 {
			error8.textContent = "Please enter a valid TimeLimit"
            error8.style.color = "red"
		 }
         if(description.value!="")
		 {
			error9.textContent = ""
			i+=1
		 }
	   else
		 {
			error9.textContent = "Description cant be empty"
            error9.style.color = "red"
		 }
		
		  let text = "Going to the Next Page!\nEither Next or Cancel.";
		  if(i==9){
			
	  if (confirm(text) == true) {
		window.location.assign("next.html");
	  } 
		 }else{
				var myText = "Fill the form correctly";
		alert (myText);
			 }
	
			
		} 
	