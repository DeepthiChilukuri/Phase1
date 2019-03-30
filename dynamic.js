function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
 }
  xhr.send();
}

loadjson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.image;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h2");
h3.textContent=p.desig;
left.append(h3);
var h4=document.createElement("h2");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h2");
h5.textContent=p.email;
left.append(h5);
}
var right=document.querySelector(".right");
function career(c){
  var h7=document.createElement("h1");
  h7.textContent="Career Objective";
  right.append(h7);
  var hr=document.createElement("hr");
  right.append(hr);
  var h6=document.createElement("h2");
  h6.textContent=c.info;
  right.append(h6);
}
//education Details
function education(edu){
  var h7=document.createElement("h1");
  h7.textContent="Education Details";
  right.append(h7);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  right.append(table);
  var tr1="<tr><th>Institute</th><th>Qualification</th><th>Percentage</th><th>Year Of Passing</th></tr>";
  var tr2=" ";
  for(var i=0;i<edu.length;i++)
  {
    tr2=tr2+"<tr><td>"+edu[i].institute+"</td><td>"+edu[i].qualification+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yop+"</td></tr>"
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
}

function skills(s){
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i=0;i<s.length;i++)
  {
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info+"<br>";
    ul.append(li);
  }
  right.append(ul);
}
