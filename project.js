function resetProjectDetails() {
    document.getElementById("PName").value = '';
    document.getElementById("projectAssigned").value = 'Select';
    document.getElementById("SDate").value = '';
    document.getElementById("EDate").value = '';
    document.querySelector('input[name="priority"]').value = '';
    document.getElementById("description").value = '';
	let text1 = "Going to the Next Page!\nEither Next or Cancel.";
	confirm(text1)
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
			var email = document.getElementById("Email")
		
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
		  var error10 = document.getElementById("e10")
		  var Email= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  
		
		  
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

         if(TimeLimit.value!="")
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

		 if(email.value!="" && email.value.match(Email))
		 {
			error10.textContent = ""
			i+=1
		 }
	   else
		 {
			error10.textContent = "Please check these field"
            error10.style.color = "red"
		 }
		
		  let text = "Going to the Next Page!\nEither Next or Cancel.";
		  if(i==10){
			
	  if (confirm(text) == true) {
		window.location.assign("index/index.html");
	  } 
		 }else{
				var myText = "Fill the form correctly";
		alert (myText);
			 }
	
	
		} 
	