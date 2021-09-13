
function saveData(event) {
	event.preventDefault();
	//event.preventDefault();
	// let fname,lname,gender,DOB,country,email,contact,query;
	// fname=document.getElementById("fname").value
	// lname=document.getElementById("lname").value
	// gender1=document.getElementById("Female").value
	// gender2=document.getElementById("Male").value
	// DOB=document.getElementById("DOB").value
	// country=document.getElementById("country").value
	// email=document.getElementById("Email").value
	// contact=document.getElementById("tel").value
	// query=document.getElementById("Question").value

	// localStorage.setItem("fname",fname);
	// localStorage.setItem("lname",lname);
	// localStorage.setItem("gender",gender1);
	// localStorage.setItem("gender",gender2);
	// localStorage.setItem("DOB",DOB);
	// localStorage.setItem("country",country);
	// localStorage.setItem("email",email);
	// localStorage.setItem("contact",contact);
	// localStorage.setItem("query",query);
	//document.querySelectorAll('input').value;
	 var obj=Array.from(document.querySelectorAll('input')).reduce((acc,input)=>({
	 	...acc,[input.id] :input.value}),
	 {});
	 console.log(obj);
 }
 document.forms[0].reset();
 to clear the form for the next entries
  document.querySelector('form').reset();
  // acknowdgment function 
		 // const ackg =(event)=>{
		 // 	if(document.getElementById('fname').value=='')
		 // 	{
		 // 		document.getElementById('fname').style.border=border='2px solid red';
		 // 	}
		 // 	else{
   //       alert('Form Submited Succussfully!')}
   //      // document.getElementById('reg-form-input').reset();
   //   }