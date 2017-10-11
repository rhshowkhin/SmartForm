// Your jQuery goes here
var userData={};
if(localStorage.getItem('userdata')){
 userData = JSON.parse(localStorage.getitem('userData'));
 $('.question').hide();
 $('#'+userData.currentQuestion).show();
 $('#name').val(userData.name);
 $('#email').val(userData.email);

 }else{
   userData={
  name:"",
  email:"",
  html: {likes: [], dislikes: []},
  css: {likes: [], dislikes: []},
  js: {likes: [], dislikes: []},
  strengths: {html:"", css:"", js:""},
  currentQuestion: "welcome"
};
localStorage.setItem('userData', JSON.stringify(userData));
}




$("#startbtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();

  if (userData.name){
    $('#name').val(userData.name);
  }

});

function validateName(name){
	var re = /^[A-Za-z ]+$/;
	return re.test(name);
}

function validateEmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$("#name").change(function(event){
  console.log($("#name").val());
  if(!validateName($("#name").val()))
    alert("Please enter a valid name");
});

$("#email").change(function(event){
  console.log($("#email").val());
  if(!validateEmail($("#email").val()))
    alert("Please enter a valid email address");
  if(validateName($("#name").val()) && validateEmail($("#email").val()))
    $("#q1nxt").prop("disabled",false);

});

$("#q1nxt").click(function(event){
  userData.name = $("#name").val();
  userData.email = $("#email").val()
  userData.currentQuestion="q1";
  localStorage.setitem('userData'.JSON.stringify(userData));
    $("#q1").hide();
  $("#q2").show();
});

$("#htmlQ").click(function(event){
  $("#q2").hide();
  $("#q2a").show();
});

$("#cssQ").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
});

$("#jsQ").click(function(event){
  $("#q2").hide();
  $("#q2c").show();
});

$(".prevQ2").click(function(event){
  $(this).parent().parent().parent().hide();
  $("#q2").show();
});

$("#htmlnxt").click(function(event){
		if (position[0] == true && position[1] == true && position[2] == true)
		{
			$("#q2").hide();
			$("#q2a").hide();
			$("#q3").show();
		}
    else{
      $("#q2a").hide();
  		$("#q2").show();
      $("#htmlQ").prop("disabled", true);
    }
});
