/*

Dec. 2016
Matt Gorski

https://github.com/causeforce/ride-ca-rfi-all

RFI form needs:

1. Event Select Option

    This value determines what <options> will be appended to the "How did you hear about us", as well as the hidden inputs (see #4).

2. Constituent Info

    -First Name
    -Last Name
    -Email
    -Phone

    This 'id' and 'name' are embedded into the HTML <inputs> & will be sent to the form.

    example: "<input type="text" name="cons_first_name" id="cons_first_name" placeholder="First Name">"

3. 'How did you hear about us' <select><option>

    This is appended via script & corresponding variable - MUST be updated every year:

    example: "<select name="1900_81486_2_84920" id="1900_81486_2_84920" onchange="choiceSelected(\'1900_81486_2_84920\', this.selectedIndex);"

4. Hidden Inputs
    
    This is appended via script & corresponding variable - MUST be updated every year:

    example: "<input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81486"/>"

5. Submit Button

    This is embedded into the HTML & will be sent to the form.
    
    <input type="submit" name="ACTION_SUBMIT_SURVEY_RESPONSE" id="ACTION_SUBMIT_SURVEY_RESPONSE">

6. <form action="http://www.conquercancer.ca/site/Survey">
    
    This makes sure it is sent to Blackbaud Convio's servers for processing.
    Submission should be confirmed in CMS via Surveys > 'survey_name' > Find Responses
    Test submissions should use "Last Name" = "Mktest" so they can be filtered out in analytics.

*/

$(document).ready(function(){  

    
    // WRITING HIDDEN INPUT FOR MEDIA SRC via Calvin Jenkins 2013
    // not working? Support ticket in with Convio 12-21-16 - Matt Gorski
      var urlSource = document.URL.indexOf('s_src=');
      
      if (urlSource !== -1) {
        $('.source-code').append("<input type=\"hidden\" id=\"source_code\" name=\"source_code\" value='"+document.URL.substring(urlSource+6, document.URL.length)+"' />");
      } else {
        $('.source-code').append("<input type=\"hidden\" id=\"source_code\" name=\"source_code\" value='no source' />");
      }


    // setting required fields
    $('input[type="text"]').prop('required', true);
    $('select').prop('required', true);


// 2017 Toronto
function Toronto() {

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

    var selectOptionsToronto = 

        '<select class="form-control" name="1900_81486_2_84920" id="1900_81486_2_84920" onchange="choiceSelected(\'1900_81486_2_84920\', this.selectedIndex);">'+
        '<option value="" selected disabled>Please select response</option>'+
        '<option value="Radio - The Edge (102.1 FM)">Radio - The Edge (102.1 FM)</option>'+
        '<option value="Radio Q107 (107.1 FM)">Radio Q107 (107.1 FM)</option>'+
        '<option value="Radio - 680 News (680 AM)">Radio - 680 News (680 AM)</option>'+
        '<option value="A current Rider referred me">A current Rider referred me</option>'+
        '<option value="A past Rider referred me">A past Rider referred me</option>'+
        '<option value="I found out through my company">I found out through my company</option>'+
        '<option value="Friend or relative">Friend or relative</option>'+
        '<option value="Canadian Cycling Magazine">Canadian Cycling Magazine</option>'+
        '<option value="Canadian Running Magazine">Canadian Running Magazine</option>'+
        '<option value="Print - Globe and Mail">Print - Globe and Mail</option>'+
        '<option value="Facebook">Facebook</option>'+
        '<option value="Google">Google</option>'+
        '<option value="Instagram">Instagram</option>'+
        '<option value="LinkedIn">LinkedIn</option>'+
        '<option value="Twitter">Twitter</option>'+
        '<option value="Yahoo">Yahoo</option>'+
        '<option value="YouTube">YouTube</option>'+
        '<option value="Community event">Community event</option>'+
        '<option value="Orientation">Orientation</option>'+
        '<option value="Newspaper article">Newspaper article</option>'+
        '<option value="I am an Enbridge employee">I am an Enbridge employee</option>'+
        '<option value="I am a PMCF employee">I am a PMCF employee</option>'+
        '<option value="- - -">- - -</option>'+
        '</select>'
        
        ;

      $('.hidden-fields').empty().append(hiddenInputsToronto);

      // there's a better way to do this instead of using this div
      $('.media').empty().append(selectOptionsToronto);

};

// 2017 Alberta
function Alberta() {

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

    var selectOptionsAlberta = 

        '<select class="form-control" name="1900_81548_2_85142" id="1900_81548_2_85142" onchange="choiceSelected(\'1900_81548_2_85142\', this.selectedIndex);">'+
        '<option value="" selected disabled>Please select response</option>'+
        '<option value="A current Rider referred me">A current Rider referred me</option>'+
        '<option value="A past Rider referred me">A past Rider referred me</option>'+
        '<option value="I found out through my company">I found out through my company</option>'+
        '<option value="Friend or relative">Friend or relative</option>'+
        '<option value="Canadian Cycling Magazine">Canadian Cycling Magazine</option>'+
        '<option value="Canadian Running Magazine">Canadian Running Magazine</option>'+
        '<option value="Print - The Globe and Mail">Print - The Globe and Mail</option>'+
        '<option value="Facebook">Facebook</option>'+
        '<option value="Google">Google</option>'+
        '<option value="Instagram">Instagram</option>'+
        '<option value="LinkedIn">LinkedIn</option>'+
        '<option value="Twitter">Twitter</option>'+
        '<option value="Yahoo">Yahoo</option>'+
        '<option value="YouTube">YouTube</option>'+
        '<option value="Community event">Community event</option>'+
        '<option value="Orientation">Orientation</option>'+
        '<option value="Newspaper article">Newspaper article</option>'+
        '<option value="I am an Enbridge employee">I am an Enbridge employee</option>'+
        '<option value="I am a ACF employee">I am a ACF employee</option>'+
        '<option value="Previous Ride to Conquer Cancer">Previous Ride to Conquer Cancer</option>'+
        '<option value="- - -">- - -</option>'+
        '</select>'
        
        ;

        // add inputs to page
        $('.hidden-fields').empty().append(hiddenInputsAlberta);

        // there's a better way to do this instead of using this div
        $('.media').empty().append(selectOptionsAlberta);

};

// 2017 Vancouver
function Vancouver() {

    var hiddenInputsVancouver = 

        '<input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81551"/>'+
        '<input type="hidden" name="cons_info_component" id="cons_info_component" value="t">'+
        '<input type="hidden" name="1900_81551_3_85161" id="1900_81551_3_85161" value="Vancouver 2017 RTCC"/>'+
        '<input type="hidden" name="1900_81551_4_85162" id="1900_81551_4_85162" value="1593"/>'+
        '<input type="hidden" name="USER_HAS_TAKEN" id="USER_HAS_TAKEN" value="null">'+
        '<input type="hidden" name="SURVEY_IGNORE_ERRORS" id="SURVEY_IGNORE_ERRORS" value="TRUE">'+
        '<input type="hidden" name="QUESTION_STAG_APP_ID" id="QUESTION_STAG_APP_ID" value="">'+
        '<input type="hidden" name="QUESTION_STAG_APP_REF_ID" id="QUESTION_STAG_APP_REF_ID" value="">'+
        '<input type="hidden" name="QUESTION_STAG_CTX_TYPE" id="QUESTION_STAG_CTX_TYPE" value="">'+
        '<input type="hidden" name="ERRORURL" id="ERRORURL" value="http://va17.conquercancer.ca/site/PageServer/?pagename=va17_get_info&amp;survey_error=incorrect_info">'
        
    ;

    var selectOptionsVancouver = 

        '<select class="form-control" name="1900_81551_2_85160" id="1900_81551_2_85160" onchange="choiceSelected(\'1900_81551_2_85160\', this.selectedIndex);">'+
        '<option value="" selected disabled>Please select response</option>'+
        '<option value="A current Rider referred me">A current Rider referred me</option>'+
        '<option value="A past Rider referred me">A past Rider referred me</option>'+
        '<option value="I found out through my company">I found out through my company</option>'+
        '<option value="Friend or relative">Friend or relative</option>'+
        '<option value="Canadian Cycling Magazine">Canadian Cycling Magazine</option>'+
        '<option value="Canadian Running Magazine">Canadian Running Magazine</option>'+
        '<option value="Print - Globe and Mail">Print - Globe and Mail</option>'+
        '<option value="Facebook">Facebook</option>'+
        '<option value="Google">Google</option>'+
        '<option value="Instagram">Instagram</option>'+
        '<option value="LinkedIn">LinkedIn</option>'+
        '<option value="Twitter">Twitter</option>'+
        '<option value="Yahoo">Yahoo</option>'+
        '<option value="YouTube">YouTube</option>'+
        '<option value="Community event">Community event</option>'+
        '<option value="Orientation">Orientation</option>'+
        '<option value="Newspaper article">Newspaper article</option>'+
        '<option value="I am a BCCF employee">I am a BCCF employee</option>'+
        '<option value="I am a Silver Wheaton employee">I am a Silver Wheaton employee</option>'+
        '<option value="Poster or flyer (not in-store display / pamphlet)">Poster or flyer (not in-store display / pamphlet)</option>'+
        '<option value="Previous Ride to Conquer Cancer">Previous Ride to Conquer Cancer</option>'+
        '<option value="- - -">- - -</option>'+
        '</select>'
        
        ;

        // add inputs to page
        $('.hidden-fields').empty().append(hiddenInputsVancouver);

        /* 
        there's a better way to do this instead of using this div
        I have to include the 'onchange' attr on the select
        */
        $('.media').empty().append(selectOptionsVancouver);

};

// 2017 Montreal
function Montreal() {

    var hiddenInputsMontreal = 

        '<input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81549">'+
        '<input type="hidden" name="cons_info_component" id="cons_info_component" value="t">'+
        '<input type="hidden" name="1900_81549_6_85153" id="1900_81549_6_85153" value="Montreal 2017 Event"/>'+
        '<input type="hidden" name="1900_81549_5_85152" id="1900_81549_5_85152" value="1591"/>'+
        '<input type="text" name="denySubmit" id="denySubmit" value="" alt="This field is used to prevent form submission by scripts.">'+
        '<input type="hidden" name="USER_HAS_TAKEN" id="USER_HAS_TAKEN" value="null">'+
        '<input type="hidden" name="SURVEY_IGNORE_ERRORS" id="SURVEY_IGNORE_ERRORS" value="TRUE">'+
        '<input type="hidden" name="QUESTION_STAG_APP_ID" id="QUESTION_STAG_APP_ID" value="">'+
        '<input type="hidden" name="QUESTION_STAG_APP_REF_ID" id="QUESTION_STAG_APP_REF_ID" value="">'+
        '<input type="hidden" name="QUESTION_STAG_CTX_TYPE" id="QUESTION_STAG_CTX_TYPE" value="">'+
        '<input type="hidden" name="ERRORURL" id="ERRORURL" value="http://mo17.conquercancer.ca/site/PageServer/?pagename=mo17_get_info&amp;survey_error=incorrect_info">'
        
    ;

    var selectOptionsMontreal = 

        '<select class="form-control" name="1900_81549_2_85149" id="1900_81549_2_85149" onchange="choiceSelected(\'1900_81549_2_85149\', this.selectedIndex);">'+
        '<option value="" disabled selected>Please select response</option>'+
        '<option value="Radio - Virgin 96">Radio - Virgin 96</option>'+
        '<option value="Radio - Energie 94.3">Radio - Energie 94.3</option>'+
        '<option value="Radio - Rouge 107.3">Radio - Rouge 107.3</option>'+
        '<option value="Radio - CHOM 97.7">Radio - CHOM 97.7</option>'+
        '<option value="A current Rider referred me">A current Rider referred me</option>'+
        '<option value="A past Rider referred me">A past Rider referred me</option>'+
        '<option value="I found out through my company">I found out through my company</option>'+
        '<option value="Canadian Cycling Magazine">Canadian Cycling Magazine</option>'+
        '<option value="Canadian Running Magazine">Canadian Running Magazine</option>'+
        '<option value="Print - The Globe and Mail">Print - The Globe and Mail</option>'+
        '<option value="Facebook">Facebook</option>'+
        '<option value="Google">Google</option>'+
        '<option value="Instagram">Instagram</option>'+
        '<option value="LinkedIn">LinkedIn</option>'+
        '<option value="Twitter">Twitter</option>'+
        '<option value="Yahoo">Yahoo</option>'+
        '<option value="YouTube">YouTube</option>'+
        '<option value="Community event">Community event</option>'+
        '<option value="Friend or relative">Friend or relative</option>'+
        '<option value="Orientation">Orientation</option>'+
        '<option value="Newspaper article">Newspaper article</option>'+
        '<option value="I am a JGH employee">I am a JGH employee</option>'+
        '<option value="Previous Ride to Conquer Cancer">Previous Ride to Conquer Cancer</option>'+
        '<option value="- - -">- - -</option>'+
        '</select>'
        
        ;

        // add inputs to page
        $('.hidden-fields').empty().append(hiddenInputsMontreal);

        /* 
        there's a better way to do this instead of using this div
        I have to include the 'onchange' attr on the select
        */
        $('.media').empty().append(selectOptionsMontreal);

};


// Once Event is selected, change all corresponding selects & inputs via their functions
// value = current year's TeamRaiser ID

    $('#event-select').change(function(){ 
                             
        if ($("#event-select").val()=="1581") {
            Toronto();
        }

        else if ($("#event-select").val()=="1592") {
            Alberta();
        } 

        else if ($("#event-select").val()=="1593") {
            Vancouver();
        } 

        else if ($("#event-select").val()=="1591") {
            Montreal();
        } 

        else {
            alert("Please make an event selection");
        }
    });

});