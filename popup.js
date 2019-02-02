'use strict';
var search = document.getElementById("search");

search.onclick = function(element){
	chrome.storage.sync.get('email', function(data) {
	var	email = data.email;
	alert(email);
	$.ajax({
    url: "https://api.fullcontact.com/v3/person.enrich",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization","Bearer Uu9f514lLOSkxycB7SB4U3hJVHMkCWw4"); 
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{"email":"'+email+'"}',
    success: function (data) {
      document.getElementById("result").innerHTML = JSON.stringify(data);
    },
    error: function(){
      document.getElementById("result").innerHTML = "Cannot get data";
    }
	});
 });
}