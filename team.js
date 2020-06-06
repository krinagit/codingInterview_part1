// fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
//   .then(response => response.json())
//   .then(data => console.log(data));

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    //console.log(myArr);
    //document.getElementById("employee").innerHTML = data[0];
    employeeDetails(data);

  }
};
function employeeDetails(arr) {

var our_team = document.getElementById("our_team");
var member="";


for (x in arr){
	employee=arr[x];
	name = employee.employeefname+" "+employee.employeelname;
	imgsrc="http://sandbox.bittsdevelopment.com/code1/employeepics/"+employee.employeeid+".jpg";
	bio= employee.employeebio;
	role= employee.roles[0].rolename;
	color=employee.roles[0].rolecolor;
	// imgsrc2="images.png";

	member+=`
		<div class="team_member"> 
          <div class="member_img">
             <img src="`+imgsrc+`" alt="our_team">
          </div>
          <h3 id="emp_name">`+name+`</h3>
          <p id="emp_bio">`+bio+`</p>
          <p><button class="button" >`+role+`</button></p>
        </div>
		`;
		// `+if(employee.employeeisfeatured == 1){+`
  //        	<img src="`+imgsrc2+`" alt="crown">
  //        `+}+`
}

our_team.innerHTML=member;



}
