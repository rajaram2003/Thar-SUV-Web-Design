$(document).ready(function() {
	$("#contactform").submit(function(e) {
		e.preventDefault();
	    var form = $(this);
	    var url = form.attr("action");
	    $("#submit").html('Please wait... <span class="fa-solid fa-circle-notch fa-spin"></span>');
	    setTimeout(
			  function() 
			  {
				$.ajax({          
			        	type: "post",
			        	url: url,
			        	data: form.serialize(),
			        	dataType: "json",
			        	cache: false,
			        	success: function(data){
			        		if(data.status == 'ok'){
						        $("#submit").html('Submit <span class="fa-solid fa-arrow-right"></span>');
						        alert(data.msg);
						        form.trigger("reset");
						        //grecaptcha.reset();
						        /*setTimeout(function() {
						        	$(".responsetype").html("");
						        	$(".responsetype").fadeOut();
						        }, 7000);*/
						    }else{
						    	alert(data.msg);
						    	$("#submit").html('Submit <span class="fa-solid fa-arrow-right"></span>');
						    	//grecaptcha.reset();
						    	/*setTimeout(function() {
						    		$(".responsetype").html("");
						        	$(".responsetype").fadeOut();
						        }, 7000);*/
						    }
			        	}
				});
			}, 2000);
	});
});