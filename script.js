 console.log("Connected to js file");
// function saveData(event)

// {
// 	event.preventDefault();
// 	//event.preventDefault();
// 	// let fname,lname,gender,DOB,country,email,contact,query;
// 	// fname=document.getElementById("fname").value
// 	// lname=document.getElementById("lname").value
// 	// gender1=document.getElementById("Female").value
// 	// gender2=document.getElementById("Male").value
// 	// DOB=document.getElementById("DOB").value
// 	// country=document.getElementById("country").value
// 	// email=document.getElementById("Email").value
// 	// contact=document.getElementById("tel").value
// 	// query=document.getElementById("Question").value

// 	// localStorage.setItem("fname",fname);
// 	// localStorage.setItem("lname",lname);
// 	// localStorage.setItem("gender",gender1);
// 	// localStorage.setItem("gender",gender2);
// 	// localStorage.setItem("DOB",DOB);
// 	// localStorage.setItem("country",country);
// 	// localStorage.setItem("email",email);
// 	// localStorage.setItem("contact",contact);
// 	// localStorage.setItem("query",query);
// 	//document.querySelectorAll('input').value;
// 	 var obj=Array.from(document.querySelectorAll('input')).reduce((acc,input)=>({
// 	 	...acc,[input.id] :input.value}),
// 	 {});
// 	 console.log(obj);



// }
let personData = [];
        const addPerson = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let person = {
                date: Date(),
                fristName: document.getElementById('fname').value,
                lastName: document.getElementById('lname').value,
                gender:document.getElementById('gender').value,
                DOB:document.getElementById('DOB').value,
                Country:document.getElementById('country').value,
                email:document.getElementById('Email').value,
                contactNumber:document.getElementById('tel').value,
                query:document.getElementById('my-textarea').value

            }
            personData.push(person);
            //document.forms[0].reset();
             // to clear the form for the next entries
            //document.querySelector('form').reset();

            console.log(personData)

            //saving to localStorage
            localStorage.setItem('MypersonList', JSON.stringify(personData) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('submit').addEventListener('click', addPerson);
        });