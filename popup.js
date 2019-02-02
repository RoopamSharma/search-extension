'use strict';
var search = document.getElementById("search");

search.onclick = function(element){
	chrome.storage.sync.get('email', function(data) {
	var	email = data.email;
	alert(email);
	$.ajax({
    url: "https://api.fullcontact.com/v3/person.enrich",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization","Bearer your-key"); 
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{"email":"'+email+'"}',
    success: function (data) {
	  var fullName = '-';
	  var location = '-';
	  var linkedin = '';
	  if(data.fullName!=undefined){
		fullName = data.fullName
	  }
	  if(data.location!=undefined){
		location = data.location
	  }
	  if(data.linkedin!=undefined){
		linkedin = data.linkedin
	  }
      document.getElementById("result").innerHTML = "<label>Full Name: "+fullName+"</label><br> <a href="+linkedin+" target='_blank'>Linkedin: "+linkedin+"</a><br><label>Phone: "+location+"</label>";
    },
    error: function(){
      document.getElementById("result").innerHTML = "No data found";
    }
	});
 });
}