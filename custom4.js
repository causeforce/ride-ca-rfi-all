$(document).ready(function() {

	// Validation Options
	/* ----- HIDING ICONS TO START -------*/
    $('i.success, i.fail').hide();
	
    // Validation Options
	$('#landing-rfi').validate({
		submitHandler: function(form) {
		    form.submit();
		  },
		highlight: function(element, errorClass,  validClass) {
		    $(element).parents().eq(1).find('i.fail').show().removeClass('zoomOut').addClass('zoomIn');
		    $(element).parents().eq(1).find('i.success').hide().removeClass('zoomIn').addClass('zoomOut');
		  },
		unhighlight: function(element, errorClass, validClass) {
		    $(element).parents().eq(1).find('i.fail').hide().removeClass('zoomIn').addClass('zoomOut');
		    $(element).parents().eq(1).find('i.success').show().removeClass('zoomOut').addClass('zoomIn');
		  },
      errorClass: "fail",
      validClass: "success",
      rules: {
        	first_name: {
          	required: true,
          	minlength: 2
        	},
        	last_name: {
          	required: true,
          	minlength: 2
        	},
        	email: {
              required: true,
              email: true
            },
            phone: {
              required: true,
              digits: true
            },
            sms_opt_in: {
                required: false
            },
            rfi_id: {
                required: true
            },
            refer: {
                required: true
            }
      },
      messages: {
            first_name: {
              required: "Please enter your first name.",
              minlength: "Please enter at least two characters."
            },
            last_name: {
              required: "Please enter your last name.",
              minlength: "Please enter at least two characters."
            },
            email: {
              required: "Please enter your email address.",
              email: "Please enter a valid email address."
            },
            phone: {
              required: "Please enter your phone number."
            },
            rfi_id: {
              required: "Please choose an event."
            },
            refer: {
              required: "Please select how did you hear about us."
            }
          }
    });

    /* ----- CUSTOM VALIDATION METHOD FOR ZIPCODE -------*/
  //   $.validator.addMethod("zipcode", function(value, element) {
		//   return this.optional(element) || /^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/.test(value);
		// }, "Please provide a valid postcode.");
	
// Variables for Hidden Inputs by Event & Year

// 2017 Toronto
var hiddenInputsToronto = 
  
  '<input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81486"/>'+
  '<input type="hidden" name="cons_info_component" id="cons_info_component" value="t">'+
  '<input type="hidden" name="1900_81486_3_84921" id="1900_81486_3_84921" value="Toronto"/>'+
  '<input type="hidden" name="1900_81486_4_84922" id="1900_81486_4_84922" value="1581"/>'+
  '<input type="hidden" name="USER_HAS_TAKEN" id="USER_HAS_TAKEN" value="null">'+
  '<input type="hidden" name="SURVEY_IGNORE_ERRORS" id="SURVEY_IGNORE_ERRORS" value="TRUE">'+
  '<input type="hidden" name="QUESTION_STAG_APP_ID" id="QUESTION_STAG_APP_ID" value="">'+
  '<input type="hidden" name="QUESTION_STAG_APP_REF_ID" id="QUESTION_STAG_APP_REF_ID" value="">'+
  '<input type="hidden" name="QUESTION_STAG_CTX_TYPE" id="QUESTION_STAG_CTX_TYPE" value="">'+ 
  '<input type="hidden" name="ERRORURL" id="ERRORURL" value="http://to17.conquercancer.ca/site/PageServer/?pagename=to17_get_info&amp;survey_error=incorrect_info">'
  ;

// 2017 Alberta
var hiddenInputsAlberta = 
  
  '<input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81548"/>'+
  '<input type="hidden" name="cons_info_component" id="cons_info_component" value="t">'+
  '<input type="hidden" name="1900_81548_4_85144" id="1900_81548_4_85144" value="Alberta 2017"/>'+
  '<input type="hidden" name="1900_81548_5_85145" id="1900_81548_5_85145" value="1592"/>'+
  '<input type="hidden" name="USER_HAS_TAKEN" id="USER_HAS_TAKEN" value="null">'+
  '<input type="hidden" name="SURVEY_IGNORE_ERRORS" id="SURVEY_IGNORE_ERRORS" value="TRUE">'+
  '<input type="hidden" name="QUESTION_STAG_APP_ID" id="QUESTION_STAG_APP_ID" value="">'+
  '<input type="hidden" name="QUESTION_STAG_APP_REF_ID" id="QUESTION_STAG_APP_REF_ID" value="">'+
  '<input type="hidden" name="QUESTION_STAG_CTX_TYPE" id="QUESTION_STAG_CTX_TYPE" value="">'+ 
  '<input type="hidden" name="ERRORURL" id="ERRORURL" value="http://ab17.conquercancer.ca/site/PageServer/?pagename=ab17_get_info&amp;survey_error=incorrect_info">'
  ;


// Event Select Functions
	
  $('#default_referral').html(
    "<select name='refer' id='refer' class='refer form-control'>\n" +
      "<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" +
      "<option value=''>Please select your event in step 1 first</option>\n" +
    "</select>"
    );	
	
// 	document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='No-City'>\n" +
// "<input type='hidden' name='cons_state' value='No-State'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;

$('#rfi_id').change(function(){	
							 
		if($("#rfi_id").val()=="1592") //2017 Alberta Ride media sources
		{					
			$('#default_referral').html("<select name='refer' id='refer' class='refer form-control'>\n" +
        "<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" +
        "<option value='Radio x92.9'>Radio x92.9</option>\n" +
        "<option value='Radio Country 105'>Radio Country 105</option>\n" +
        "<option value='TV CTV Calgary'>TV CTV Calgary</option>\n" +
        "<option value='TV Global Calgary'>TV Global Calgary</option>\n" +
        "<option value='TV AMC Calgary'>TV AMC Calgary</option>\n" +
        "<option value='TV A&E Calgary'>TV A&E Calgary</option>\n" +
        "<option value='TV TLC Calgary'>TV TLC Calgary</option>\n" +
        "<option value='TV Peachtree Calgary'>TV Peachtree Calgary</option>\n" +
        "<option value='TV CNN Calgary'>TV CNN Calgary</option>\n" +
        "<option value='TV Golf Channell Calgary'>TV Golf Channell Calgary</option>\n" +
        "<option value='TV Spike Calgary'>TV Spike Calgary</option>\n" +
        "<option value='TV CTV Edmonton'>TV CTV Edmonton</option>\n" +
        "<option value='TV Global Edmonton'>TV Global Edmonton</option>\n" +
        "<option value='TV AMC Edmonton'>TV AMC Edmonton</option>\n" +
        "<option value='TV A&E Edmonton'>TV A&E Edmonton</option>\n" +
        "<option value='TV TLC Edmonton'>TV TLC Edmonton</option>\n" +
        "<option value='TV Peachtree Edmonton'>TV Peachtree Edmonton</option>\n" +
        "<option value='TV CNN Edmonton'>TV CNN Edmonton</option>\n" +
        "<option value='TV Golf Channell Edmonton'>TV Golf Channell Edmonton</option>\n" +
        "<option value='TV Spike Edmonton'>TV Spike Edmonton</option>\n" +
        "<option value='TV Olympics - CTV'>TV Olympics - CTV/option>\n" +
        "<option value='TV TSN'>TV TSN</option>\n" +
        "<option value='Print Globe and Mail'>Print Globe and Mail</option>\n" +
        "<option value='Print Bicycling Magazine'>Print Bicycling Magazine</option>\n" +
        "<option value='Print Canadian Cyclist'>Print Canadian Cyclist</option>\n" + 
        "<option value='Elevator advertising'>Elevator advertising</option>\n" + 
        "<option value='In-store display or pamphlet'>In-store display or pamphlet</option>\n" +
        "<option value='Newspaper article'>Newspaper article</option>\n" +
        "<option value='Friend or relative'>Friend or relative</option>\n" +
        "<option value='I am an Enbridge employee'>I am an Enbridge employee</option>\n" +
        "<option value='I am a ACF employee'>I am a ACF employee</option>\n" +
        "<option value='Community event'>Community event</option>\n" +
        "<option value='Orientation'>Orientation</option>\n" +
        "<option value='Poster or flyer (not in-store display / pamphlet)'>Poster or flyer (not in-store display / pamphlet)</option>\n" +
        "<option value='Previous Ride to Conquer Cancer'>Previous Ride to Conquer Cancer</option>\n" +
        "<option value='Twitter'>Twitter</option>\n" +
        "<option value='Facebook'>Facebook</option>\n" +
        "<option value='Instagram'>Instagram/option>\n" +
        "<option value='Google'>Google</option>\n" +
        "<option value='Yahoo'>Yahoo</option>\n" +
        "<option value='Outreach- SF'>Outreach - SF</option>\n" +
        "<option value='- - -'>- - -</option>\n" +
        "</select>"
        );

  $('#default_referral select').attr('id','1900_81548_2_85142').attr('name','1900_81548_2_85142');
  $('#hidden-inputs').empty().append(hiddenInputsAlberta);

// document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='Alberta'>\n" +
// "<input type='hidden' name='cons_state' value='AB'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;
			
		}
		else if ($("#rfi_id").val()=="1593")//2017 BC Ride media sources
		{				
			document.getElementById('default_referral').innerHTML="<select  name='refer' id='refer' class='refer form-control'>\n" +
"<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" +
"<option value='TV CTV'>TV CTV</option>\n" +
"<option value='TV Global'>TV Global</option>\n" +
"<option value='TV City TV'>TV City TV</option>\n" +
"<option value='TV Omni'>TV Omni</option>\n" +
"<option value='TV Olympics - CTV'>TV Olympics - CTV</option>\n" +
"<option value='TV TSN'>TV TSN</option>\n" +
"<option value='Radio Rock 101'>Radio Rock 101</option>\n" +
"<option value='Radio The Fox'>Radio The Fox</option>\n" +
"<option value='Print Globe and Mail'>Print Globe and Mail</option>\n" +
"<option value='Print Bicycling Magazine'>Print Bicycling Magazine</option>\n" +
"<option value='Print Canadian Cyclist'>Print Canadian Cyclist</option>\n" +
"<option value='In-store display or pamphlet'>In-store display or pamphlet</option>\n" +
"<option value='Newspaper article'>Newspaper article</option>\n" +
"<option value='Friend or relative'>Friend or relative</option>\n" +
"<option value='I am a Silver Wheaton emplyee'>I am a Silver Wheaton emplyee</option>\n" +
"<option value='I am a BCCF employee'>I am a BCCF employee</option>\n" +
"<option value='Community event'>Community event</option>\n" +
"<option value='Orientation>Orientation</option>\n" +
"<option value='Poster or flyer (not in-store display / pamphlet)'>Poster or flyer (not in-store display / pamphlet)</option>\n" +
"<option value='Previous Ride to Conquer Cancer'>Previous Ride to Conquer Cancer/option>\n" +
"<option value='Twitter'>Twitter</option>\n" +
"<option value='Facebook'>Facebook</option>\n" +
"<option value='Instagram'>Instagram</option>\n" +
"<option value='Google'>Google</option>\n" +
"<option value='Yahoo'>Yahoo</option>\n" +
"<option value='Outreach- SF'>Outreach - SF</option>\n" +
"<option value='- - -'>- - -</option>\n" +
"</select>"
;

// document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='Vancouver'>\n" +
// "<input type='hidden' name='cons_state' value='BC'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;

		}
		else if($("#rfi_id").val()=="1581")//2016 Ontario Ride media sources 
		{				
document.getElementById('default_referral').innerHTML="<select  name='refer' id='refer' class='refer form-control'>\n" +
"<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" + 
"<option value='TV CTV'>TV CTV</option>\n" +
"<option value='TV CP24'>TV CP24</option>\n" +
"<option value='Radio 102.1 The Edge'>Radio 102.1 The Edge</option>\n" +
"<option value='Radio 680 News'>Radio 680 News</option>\n" +
"<option value='Print Globe and Mail'>Print Globe and Mail</option>\n" +
"<option value='Print Bicycling Magazine'>Print Bicycling Magazine</option>\n" +
"<option value='Print Canadian Cyclist'>Print Canadian Cyclist</option>\n" + 
"<option value='In-store display or pamphlet'>In-store display or pamphlet</option>\n" +
"<option value='Newspaper article'>Newspaper article</option>\n" +
"<option value='Friend or relative'>Friend or relative</option>\n" +
"<option value='I am an Enbridge employee'>I am an Enbridge employee</option>\n" +
"<option value='I am a PMCF employee'>I am a PMCF employee</option>\n" +
"<option value='Community event'>Community event</option>\n" +
"<option value='Orientation'>Orientation</option>\n" +
"<option value='Poster or flyer (not in-store display / pamphlet)'>Poster or flyer (not in-store display / pamphlet)</option>\n" +
"<option value='Previous Ride to Conquer Cancer'>Previous Ride to Conquer Cancer</option>\n" +
"<option value='Twitter'>Twitter</option>\n" +
"<option value='Facebook'>Facebook</option>\n" +
"<option value='Google'>Google</option>\n" +
"<option value='Yahoo'>Yahoo</option>\n" +
"<option value='Outreach- SF'>Outreach - SF</option>\n" +
"<option value='- - -'>- - -</option>\n" +"</select>"
;

// document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='Quebec'>\n" +
// "<input type='hidden' name='cons_state' value='MO'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;

		}
		else if($("#rfi_id").val()=="1591")//2016 Quebec Ride media sources 
		{				
			document.getElementById('default_referral').innerHTML="<select  name='refer' id='refer' class='refer form-control'>\n" +
"<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" +
"<option value='Radio Virgin 96'>Radio Virgin 96</option>\n" +
"<option value='Radio CHOM'>Radio CHOM</option>\n" +
"<option value='Radio NRJ'>Radio NRJ</option>\n" +
"<option value='Radio CKOI'>Radio CKOI</option>\n" +
"<option value='TV CTV'>TV CTV</option>\n" +
"<option value='TV TVA'>TV TVA</option>\n" +
"<option value='TV Olympics - CTV'>TV Olympics - CTV</option>\n" +
"<option value='TV RDS'>TV RDS</option>\n" +
"<option value='TV TSN'>TV TSN</option>\n" +
"<option value='Print Bicycling Magazine'>Print Bicycling Magazine</option>\n" +
"<option value='Print Globe and Mail'>Print Globe and Mail</option>\n" +
"<option value='Print Canadian Cyclist'>Print Canadian Cyclist</option>\n" + 
"<option value='Elevator advertising'>Elevator advertising</option>\n" +
"<option value='In-store display or pamphlet'>In-store display or pamphlet</option>\n" +
"<option value='Newspaper article'>Newspaper article</option>\n" +
"<option value='Friend or relative'>Friend or relative</option>\n" +
"<option value='I am an Enbridge employee'>I am an Enbridge employee</option>\n" +
"<option value='I am a JGH employee'>I am a JGH employee</option>\n" +
"<option value='Community event'>Community event</option>\n" +
"<option value='Orientation'>Orientation</option>\n" +
"<option value='Poster or flyer (not in-store display / pamphlet)'>Poster or flyer (not in-store display / pamphlet)</option>\n" +
"<option value='Previous Ride to Conquer Cancer'>Previous Ride to Conquer Cancer</option>\n" +
"<option value='Twitter'>Twitter</option>\n" +
"<option value='Facebook'>Facebook</option>\n" +
"<option value='Google'>Google</option>\n" +
"<option value='Yahoo'>Yahoo</option>\n" +
"<option value='Outreach- SF'>Outreach - SF</option>\n" +
"<option value='- - -'>- - -</option>\n" +"</select>"
;


// document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='Toronto'>\n" +
// "<input type='hidden' name='cons_state' value='ON'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;

		}
		else
		{				
alert("Please make an event selection");
document.getElementById('default_referral').innerHTML="<select  name='refer' id='refer' class='refer form-control'>\n" +
"<option value=''>How did you hear about The Ride To Conquer Cancer?</option>\n" +
"<option value='- - -'>- - -</option>\n" +
"</select>"
;

// document.getElementById('address_area').innerHTML="<input type='hidden' name='street1' value='This is not a real address. please ignore.'>\n" +
// "<input type='hidden' name='city' value='No-City'>\n" +
// "<input type='hidden' name='cons_state' value='No-State'>\n" +
// "<input type='hidden' name='cons_country' value='Canada'>\n" +
// "<input type='hidden' name='zip_code' value='AB T2P 3S9'>\n" 
// ;

			return;
		}
	});//end check to ensure even selection
	


});//end on ready function
