# Landing Page Form
## Canadian Cyclist Request for Information Landing Page - CauseForce, Inc.
## Toronto, Vancouver, Alberta, Montreal
#### December 2016

Canadian Cyclist Campaign Landing Page. This form combines 4 different events' information which is selected by the first drop-down. Select options are appended, as well as hidden inputs. The form is submitted to Blackbaud servers for processing.

*RFI form needs:*
1. Event Select Option

    This value determines what `<options>` will be appended to the "How did you hear about us", as well as the hidden inputs (see #4).
    
2. Constituent Info

    -First Name
    -Last Name
    -Email
    -Phone
    This `id` and `name` are embedded into the HTML `<input>` & will be sent to the form.
   e.g. 
    ```
    <input type="text" name="cons_first_name" id="cons_first_name" placeholder="First Name">
    ```
    
3. 'How did you hear about us' `<select><option>`
    This is appended via script & corresponding variable - MUST be updated every year:
    e.g.
    ```
    <select name="1900_81486_2_84920" id="1900_81486_2_84920" onchange="choiceSelected(\'1900_81486_2_84920\', this.selectedIndex);
    ```
4. Hidden Inputs
    
    This is appended via script & corresponding variable - MUST be updated every year:
    e.g.
    ```
    <input type="hidden" name="SURVEY_ID" id="SURVEY_ID" value="81486"/>
    ```
    
5. Submit Button

    This is embedded into the HTML & will be sent to the form.
    
    ```
    <input type="submit" name="ACTION_SUBMIT_SURVEY_RESPONSE" id="ACTION_SUBMIT_SURVEY_RESPONSE">
    ```
    
6. `<form action="http://www.conquercancer.ca/site/Survey">`
    
    This makes sure it is sent to Blackbaud Convio's servers for processing.
    Submission should be confirmed in CMS via Surveys > 'survey_name' > Find Responses
    Test submissions should use "Last Name" = "Mktest" so they can be filtered out in analytics.
