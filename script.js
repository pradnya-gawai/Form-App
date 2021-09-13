console.log("Connected to js file");
let personData = [];
 const addPerson = (event)=>{
 	    //to stop the form submitting
	event.preventDefault(); 
   	if(document.getElementById('fname').value!="" &&
   		document.getElementById('lname').value!=""&&
   		document.getElementById('Email').value!="")
   	{
   	//collecting gender value

    var ele = document.getElementsByName('Gender');
	var val=''
	for(i = 0; i < ele.length; i++) {
	if(ele[i].checked)
	val=ele[i].value;}
    let person = {
    	date: Date(),
    	fristName: document.getElementById('fname').value,
    	lastName: document.getElementById('lname').value,
    	gender:val,
    	DOB:document.getElementById('DOB').value,
    	Country:document.getElementById('country').value,
    	email:document.getElementById('Email').value,
    	contactNumber:document.getElementById('tel').value,
    	query:document.getElementById('Question').value}
    personData.push(person);
    console.log(personData);
	//saving to localStorage
    localStorage.setItem('MypersonList', JSON.stringify(personData) );
    myReset();
    alert("form Submited Succefully!")
     // document.querySelector('form').reset();

    }
    else 
    { var x;
    		  x = document.querySelectorAll(".form-input");
    		  for (i = 0; i < x.length; i++){
    		  	
    		  	if(x[i]==document.getElementById('fname')&&
    		  		document.getElementById('fname').value=="")
    		  	{x[i].style.border = "1.5px solid #f72c1e";}
    		     else if(document.getElementById('fname').value!="")
    		  	{x[i].style.backgroundColor = "1.5px solid #1bf21";}


    		  	if(x[i]==document.getElementById('lname')&&
    		  		document.getElementById('lname').value=="")
    		  	{x[i].style.border = "1.5px solid #f72c1e";}
    		  else if(document.getElementById('lname').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";}

    		  if(x[i]==document.getElementById('DOB')&&
    		  		document.getElementById('DOB').value=="")
    		  	{x[i].style.border = "1.5px solid black";}
    		  else if(document.getElementById('lname').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";}

    		  if(x[i]==document.getElementById('country')&&
    		  		document.getElementById('country').value=="")
    		  	{x[i].style.border = "1.5px solid black";}
    		  else if(document.getElementById('country').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";}

			if(x[i]==document.getElementById('Email')&&
    		  		document.getElementById('Email').value=="")
    		  		  {x[i].style.border = "1.5px solid #f72c1e";}
    		  		else if(document.getElementById('Email').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";}

    		  if(x[i]==document.getElementById('tel')&&
    		  		document.getElementById('tel').value=="")
    		  		{x[i].style.border = "1.5px solid #f72c1e";}
    		  	else if(document.getElementById('tel').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";}


    		   if(x[i]==document.getElementById('Question')&&
    		  		document.getElementById('Question').value=="")
    		  		{x[i].style.border = "1.5px solid black";}
    		  	else if(document.getElementById('Question').value!="")
    		  	{x[i].style.border = "1.5px solid #1bf21b";} }
    		  			
	 	
	}}

	// Adding event lisrner on loading doccument
         document.addEventListener('DOMContentLoaded', ()=>{
     	document.getElementById('submit').addEventListener('click', addPerson);
     });

	
   const myReset=()=>{
   	     document.querySelector('form').reset();
   	     var x, i;
  x = document.querySelectorAll(".form-input");
  for (i = 0; i < x.length; i++) {
    x[i].style.border = "1.5px solid black";
  }
};


