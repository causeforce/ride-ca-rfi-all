<?php

//ini_set('display_errors', 1);

require_once ("convio.php");

$process_status = "0";

//if (!isValidEmail($_POST['email']))
//{
//  $process_status = "3";
//}

mysql_connect("localhost", "ridetovi_hero1", "94979497") or die(mysql_error());
mysql_select_db("ridetovi_form1") or die(mysql_error());

function get_redirect(){

	$rfi_id=isset($_POST['rfi_id']) ? mysql_real_escape_string($_POST['rfi_id']) : '';

	switch($rfi_id) {


	case "1523":
	$redirect="http://to15.conquercancer.ca/site/PageServer?pagename=to15_RFI_Confirmation";
	break;

	case "1524":
	$redirect="http://va15.conquercancer.ca/site/PageServer?pagename=va15_RFI_Confirmation";
	break;

	case "1100":
	$redirect="http://ny15.ridetovictory.org/site/PageServer?pagename=ny15_RFI_Confirmation";
	break;

	case "1110":
	$redirect="http://ch15.ridetovictory.org/site/PageServer?pagename=ch15_RFI_Confirmation";
	break;

	case "1531":
	$redirect="http://ab15.conquercancer.ca/site/PageServer?pagename=ab15_RFI_Confirmation";
	break;

	case "1522":
	$redirect="http://mo15.conquercancer.ca/site/PageServer?pagename=mo15_RFI_Confirmation";
	break;

	case "1500":
	$redirect="http://mo15.endcancer.ca/site/PageServer?pagename=RFI_Confirmation_2015_Montreal";
	break;
	
	case "1572":
	$redirect="http://ab16.conquercancer.ca/site/PageServer?pagename=ab16_rfi_confirmation";
	break;

	case "1571":
	$redirect="http://mo16.conquercancer.ca/site/PageServer?pagename=mo16_rfi_confirmation";
	break;
	
	case "1561":
	$redirect="http://to16.conquercancer.ca/site/PageServer?pagename=to16_rfi_confirmation";
	break;

	case "1573":
	$redirect="http://va16.conquercancer.ca/site/PageServer?pagename=va16_rfi_confirmation";
	break;

	// 2017 Ride Canada
	case "1593":
	$redirect="http://va17.conquercancer.ca/site/PageServer?pagename=va17_get_info_requested";
	break;

	case "1592":
	$redirect="http://ab17.conquercancer.ca/site/PageServer?pagename=ab17_get_info_requested";
	break;

	case "1581":
	$redirect="http://to17.conquercancer.ca/site/PageServer?pagename=to17_get_info_requested";
	break;

	case "1591":
	$redirect="http://mo17.conquercancer.ca/site/PageServer?pagename=mo17_get_info_requested";
	break;

	}

	return $redirect;
}

function get_event_name(){
	$rfi_id=isset($_POST['rfi_id']) ? mysql_real_escape_string($_POST['rfi_id']) : '';

	switch($rfi_id) {


	case "1523":
	$event_name="2015 Toronto";
	break;

	case "1524":
	$event_name="2015 Vancouver";
	break;

	case "1100":
	$event_name="2015 NewYork";
	break;

	case "1110":
	$event_name="2015 Chicago";
	break;

	case "1531":
	$event_name="2015 Alberta";
	break;

	case "1522":
	$event_name="2015 Montreal";
	break;

	case "1500":
	$event_name="2015 Montreal";
	break;
	
	case "1572":
	$event_name="2016 Alberta";
	break;
	
	case "1571":
	$event_name="2016 Montreal";
	break;
	
	case "1561":
	$event_name="2016 Toronto";
	break;
	
	case "1573":
	$event_name="2016 Vancouver";
	break;

	// 2017 Ride Canada
	case "1593":
	$event_name="2017 Vancouver";
	break;

	case "1593":
	$event_name="2017 Alberta";
	break;

	case "1591":
	$event_name="2017 Montreal";
	break;

	case "1581":
	$event_name="2017 Toronto";
	break;

	}

	return $event_name;
}

$instance_id= isset($_POST['instance']) ? mysql_real_escape_string($_POST['instance']) : '';
$rfi_id = isset($_POST['rfi_id']) ? mysql_real_escape_string($_POST['rfi_id']) : '';
$event_name=get_event_name();
$first_name = isset($_POST['first_name']) ? mysql_real_escape_string($_POST['first_name']) : '';
$last_name = isset($_POST['last_name']) ? mysql_real_escape_string($_POST['last_name'])  : '';
$address = isset($_POST['street1']) ? mysql_real_escape_string($_POST['street1']) : '';
$address2 = isset($_POST['street2']) ? mysql_real_escape_string($_POST['street2']) : '';
$province = isset($_POST['cons_state']) ? mysql_real_escape_string($_POST['cons_state']) : '';
$zip_code = isset($_POST['zip_code']) ? mysql_real_escape_string($_POST['zip_code']) : '';
$country = isset($_POST['cons_country']) ? mysql_real_escape_string($_POST['cons_country']) : '';
$refer = isset($_POST['refer']) ? mysql_real_escape_string($_POST['refer']) : '';
$city = isset($_POST['city']) ? mysql_real_escape_string($_POST['city'])  : '';
$phone = isset($_POST['phone']) ? mysql_real_escape_string($_POST['phone']) : '';
$email = isset($_POST['email']) ? mysql_real_escape_string($_POST['email']) : '';
$sms = isset($_POST['sms_opt_in']) ? mysql_real_escape_string($_POST['sms_opt_in']) : '';
$source_code = isset($_POST['s_src']) ? mysql_real_escape_string($_POST['s_src']) : '';

if (!$source_code)
  $source_code=isset($_POST['source_code']) ? mysql_real_escape_string($_POST['source_code']) : '';

$redirect=get_redirect();
$cons_id = "";
$language = "French";

if ( stripos(strtolower($redirect), "locale=fr_ca") === false )
	$language = "English";

$first_name = str_replace("First Name :", "", $first_name);
$last_name = str_replace("Last Name :", "", $last_name);
$address2 =  str_replace("Street2 :", "", $address2);
$referring_url = getenv("HTTP_REFERER");

if ($process_status == "0")
{
  // Do some validations
  if (empty($last_name))
    $process_status = "4";
//elseif (empty($instance_id))
//  $process_status = "0";

  // retrieve the RFI form URL

  $data = get_instancedata($rfi_id);
  $instance_id =isset($data[0]["site_id"]) ? mysql_real_escape_string($data[0]["site_id"]) : ''; 
  $rfi_url = isset($data[0]["rfi_url"]) ? mysql_real_escape_string($data[0]["rfi_url"]) : ''; 
  $survey_id = isset($data[0]["group_id"]) ? mysql_real_escape_string($data[0]["group_id"]) : '';
  $form_id = isset($data[0]["form_id"]) ? mysql_real_escape_string($data[0]["form_id"]) : '';

  if (empty($rfi_url))
    $process_status = "9";
}

if (!$address)
 $address = "None Given";

if ($process_status == "0")
{

  /*$zip_code = str_replace(' ','',$zip_code);
  $sql = "SELECT * FROM `CA_US_ZIPCODES` WHERE `POSTAL_CODE` = '$zip_code'";
  $result = mysql_query($sql);
  $row = mysql_fetch_assoc($result);
  $city = $row['CITY_NAME'];
  $state = $row['PROVINCE_ABBR'];
  $country = $row['COUNTRY'];

  if ($country == "USA")
    $country = "United+States";
  elseif ($country == "CAN" || $country == "CANADA")
    $country = "Canada";
	*/

 // mysql_free_result($result);

  /*if (!$state)
  {

    $city = "Woodland+Hills";
    $state = "CA";
    $zip_code = "91367";
    $country = "United+States";
    //$process_status = "5";
  }*/
  //$province = $state;
}

if ( ($country == "United States" || $country == "United+States") && $language == "French")

	$country = "%C9tats-Unis";

  $sql = "SELECT * FROM `rfi` WHERE `FIRST_NAME` = '$first_name' and
					     `LAST_NAME` = '$last_name' and
					     `ADDRESS` = '$address' and
					     `CITY` = '$city' and
					     `PROVINCE` = '$province' and
					     `COUNTRY` = '$country' and
					     `ZIP_CODE` = '$zip_code' and
					     `EMAIL` = '$email' and
					     `SOURCE_CODE` = '$source_code' and
					     `rfi_id` = '$rfi_id'";


$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);

if ($row['id']) {
	$process_status = "8";
}

mysql_free_result($result);

if ($process_status == "0")
{

  // Here is the magic call into handling the RFI registration:

  if (strtolower($instance_id) == "cfrca")
  {
    $ch = curl_init('http://www.conquercancer.ca/site/Survey');
    $var_prefix = "1900";
  }
  elseif (strtolower($instance_id) == "cfwus")
  {
    $ch = curl_init('http://in10.endcancer.org/site/Survey');
    $var_prefix = "2098";
  }
  elseif (strtolower($instance_id) == "cfrus")
  {
    $ch = curl_init('http://dc14.ridetovictory.org/site/Survey');
    $var_prefix = "2097";
  }
  elseif (strtolower($instance_id) == "cfhrca")
  {
    $ch = curl_init('http://ot10.bikeforbeats.ca/site/Survey');
    $var_prefix = "2099";
  }
  elseif (strtolower($instance_id) == "cfuaca")
  {
    $ch = curl_init('http://cl11.uncoverthecure.org/site/Survey');
    $var_prefix = "1661";
  }
  elseif (strtolower($instance_id) == "cfca")
  {
    $ch = curl_init('http://www.endcancer.ca/site/Survey');
    $var_prefix = "1497";
  }
  else
  {
    $ch = curl_init('http://www.endcancer.ca/site/Survey');
    $var_prefix = "1497";
  }

  curl_setopt ($ch, CURLOPT_POST, 1);

$post_data = $var_prefix."_".$survey_id."_1_".$form_id."=-+-+-"

              ."&".$var_prefix."_".$survey_id."_1_1260=-+-+-"			// Bike 4 Beats
              ."&".$var_prefix."_".$survey_id."_2_".($form_id+1)."=NOREPLY"
              ."&".$var_prefix."_".$survey_id."_2_1280=NOREPLY"			// Bike 4 Beats

	          //."&s_language=".$language
              ."&s_src=".urlencode($source_code)


              // Montreal exception
              ."&".$var_prefix."_".$survey_id."_1_66220=NOREPLY"


              // Vancouver exception
              ."&".$var_prefix."_".$survey_id."_2_66201=NOREPLY"

              // Toronto exception
              ."&".$var_prefix."_".$survey_id."_2_66241=NOREPLY"

              ."&".$var_prefix."_".$survey_id."_3_".($form_id+2)."="
              ."&".$var_prefix."_".$survey_id."_3_1300="			// Bike 4 Beats

              ."&cons_info_component=t"
              ."&cons_title="
              ."&cons_first_name=".urlencode($_POST['first_name'])
              ."&cons_middle_name="
              ."&cons_last_name=".urlencode($_POST['last_name'])
              ."&cons_email=".$_POST['email']
              ."&cons_street1=".urlencode($address)
              ."&cons_street2=".urlencode($address2)
              ."&cons_city=".$city
              ."&cons_state=".$province
              ."&cons_zip_code=".urlencode($zip_code)
              ."&cons_country=".$country
              ."&cons_phone=".$_POST['phone']
              ."&cons_birth_date_MONTH=0"
              ."&cons_birth_date_DAY=0"
              ."&cons_birth_date_YEAR=0"
              ."&cons_mail_opt_in=t"
              ."&cons_email_opt_in=on"
              ."&cons_email_opt_in_requested=true"
              ."&cons_email_format=1"
              ."&cons_email_format_requested=1"
              ."&cons_postal_opt_in=on"
              ."&cons_postal_opt_in_requested=true"
              ."&".$var_prefix."_".$survey_id."_13_".($form_id+12)."="
              ."&".$var_prefix."_".$survey_id."_14_".($form_id+13)."="
              ."&".$var_prefix."_".$survey_id."_15_".($form_id+14)."="
              ."&".$var_prefix."_".$survey_id."_17_".($form_id+16)."="
              ."&".$var_prefix."_".$survey_id."_18_".($form_id+17)."=".urlencode($event_name)
	          ."&".$var_prefix."_".$survey_id."_10_1381=".urlencode($event_name) 	// Bike 4 Beats
              ."&".$var_prefix."_".$survey_id."_19_".($form_id+18)."=".$rfi_id
	          ."&".$var_prefix."_".$survey_id."_11_1382=".$rfi_id			// Bike 4 Beats
	          ."&".$var_prefix."_".$survey_id."_12_1383=English"			// Bike 4 Beats

              // Toronto exception
              ."&".$var_prefix."_".$survey_id."_9_".($form_id+17)."=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_".($form_id+18)."=".$rfi_id

              // Ottowa exception
              /*."&".$var_prefix."_".$survey_id."_18_63457=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_63458=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_20_63459=".$language*/
			  ."&".$var_prefix."_".$survey_id."_18_75711=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_75720=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_20_75159=".$language

              // Montreal 2010 Weekend exception
              ."&".$var_prefix."_".$survey_id."_18_66237=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_66238=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_20_66239=".$language

              // Montreal Ride exception
              ."&".$var_prefix."_".$survey_id."_20_53945=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_53925=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_18_52904=".$language

              // 2011 Montreal WEBC exception
              ."&".$var_prefix."_".$survey_id."_19_79601=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_20_79602=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_17_75199=".$language
			   ."&".$var_prefix."_".$survey_id."_1_75180="."-+-+-"

              // Calgary exception
              ."&".$var_prefix."_".$survey_id."_18_64057=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_64058=".$rfi_id

              // Edmonton exception
              ."&".$var_prefix."_".$survey_id."_18_66197=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_66198=".$rfi_id

              // Vancouver exception
              ."&".$var_prefix."_".$survey_id."_18_66217=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_66218=".$rfi_id

              // Toronto exception
              ."&".$var_prefix."_".$survey_id."_18_66257=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_66258=".$rfi_id

              // Kentucky exception
              ."&".$var_prefix."_".$survey_id."_10_4117=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_11_4118=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_20_".($form_id+19)."=".$language

              // UA exception
              ."&".$var_prefix."_".$survey_id."_21_2940=".$language

			  // 2011 Toronto Ride exception
              ."&".$var_prefix."_".$survey_id."_1_46885="."-+-+-"

			  //2012 Toronto Ride exception
              ."&".$var_prefix."_".$survey_id."_9_56773=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_56774=".$rfi_id

				// 2011 Alberta Ride exception
                   ."&".$var_prefix."_".$survey_id."_1_52405="."-+-+-"

                // 2011 Vancouver Ride Exception
                  ."&".$var_prefix."_".$survey_id."_1_52365="."-+-+-"

                // 2011 Montreal  Ride Exception
                  ."&".$var_prefix."_".$survey_id."_1_52885="."-+-+-"

				// 2012 Alberta Ride exception
                   ."&".$var_prefix."_".$survey_id."_1_58025="."-+-+-"

                // 20112Vancouver Ride Exception
                  ."&".$var_prefix."_".$survey_id."_1_58064="."-+-+-"

                // 2012 Montreal  Ride Exception
                  ."&".$var_prefix."_".$survey_id."_1_58044="."-+-+-"
				  ."&".$var_prefix."_".$survey_id."_20_61065=".urlencode($event_name)
                  //."&".$var_prefix."_".$survey_id."_19_58062=".$rfi_id
                  ."&".$var_prefix."_".$survey_id."_18_60606=".$language

                 //2013 Toronto Ride exception
				  ."&".$var_prefix."_".$survey_id."_9_62793=".urlencode($event_name)
				  ."&".$var_prefix."_".$survey_id."_10_62794=".$rfi_id
				 //."&".$var_prefix."_".$survey_id."_1_62785=".urlencode($refer)
				  ."&".$var_prefix."_".$survey_id."_1_62785="."-+-+-"

				 //2013 Vancouver Ride exception
				  ."&".$var_prefix."_".$survey_id."_18_63162=".urlencode($event_name)
				  ."&".$var_prefix."_".$survey_id."_19_63163=".$rfi_id
				 //."&".$var_prefix."_".$survey_id."_1_63145=".urlencode($refer)
				   ."&".$var_prefix."_".$survey_id."_1_63145="."-+-+-"

				 //2013 Montreal Ride exception
				  ."&".$var_prefix."_".$survey_id."_20_64754=".urlencode($event_name)
				  ."&".$var_prefix."_".$survey_id."_19_64753=".$rfi_id
				  ."&".$var_prefix."_".$survey_id."_18_66605=".$language
				 //."&".$var_prefix."_".$survey_id."_1_64735=".urlencode($refer)
				  ."&".$var_prefix."_".$survey_id."_1_64735="."-+-+-"

				 //2013 Alberta Ride exception
				  ."&".$var_prefix."_".$survey_id."_18_64730=".urlencode($event_name)
				  ."&".$var_prefix."_".$survey_id."_19_64731=".$rfi_id
				  ."&".$var_prefix."_".$survey_id."_1_64713="."-+-+-"
			      //."&".$var_prefix."_".$survey_id."_1_64713=".urlencode($refer)


// 2017 Ride Exceptions
			  
	//2017 Alberta Ride exception
	."&".$var_prefix."_".$survey_id."_4_85144=".urlencode($event_name)
	."&".$var_prefix."_".$survey_id."_5_85145=".$rfi_id
	."&".$var_prefix."_".$survey_id."_2_85142=".urlencode($refer)
	."&".$var_prefix."_".$survey_id."_7_85147=".$sms

	//2017 Montreal Ride exception
	."&".$var_prefix."_".$survey_id."_6_85153=".urlencode($event_name)
	."&".$var_prefix."_".$survey_id."_5_85152=".$rfi_id
	."&".$var_prefix."_".$survey_id."_2_85149=".urlencode($refer)
	."&".$var_prefix."_".$survey_id."_3_85150=".$sms

	//2017 Toronto Ride exception
	."&".$var_prefix."_".$survey_id."_3_84921=".urlencode($event_name)
	."&".$var_prefix."_".$survey_id."_4_84922=".$rfi_id
	."&".$var_prefix."_".$survey_id."_2_84920=".urlencode($refer)
	."&".$var_prefix."_".$survey_id."_5_84923=".$sms	

	//2017 Vancouver Ride exception
	."&".$var_prefix."_".$survey_id."_3_85161=".urlencode($event_name)
	."&".$var_prefix."_".$survey_id."_4_85162=".$rfi_id
	."&".$var_prefix."_".$survey_id."_2_85160=".urlencode($refer)
	."&".$var_prefix."_".$survey_id."_6_85164=".$sms

             
//2016 Ride Exceptions
			  
			  //2016 Alberta Ride exception
              ."&".$var_prefix."_".$survey_id."_4_82922=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_5_82923=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_82906=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_7_82927=".$sms

			  //2016 Montreal Ride exception
              ."&".$var_prefix."_".$survey_id."_6_82544=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_5_82543=".$rfi_id
			  ."&".$var_prefix."_".$survey_id."_2_82526=".urlencode($refer)
			  ."&".$var_prefix."_".$survey_id."_3_82550=".$sms
			  
			  //2016 Toronto Ride exception
              ."&".$var_prefix."_".$survey_id."_3_82275=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_4_82276=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_82274=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_5_82277=".$sms

			  //2016 Vancouver Ride exception
              ."&".$var_prefix."_".$survey_id."_3_82823=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_4_82824=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_82808=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_6_82828=".$sms


//2015 Ride Exceptions

			  //2015 Toronto Ride exception
              ."&".$var_prefix."_".$survey_id."_9_77600=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_77601=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_77592=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_13_78990=".$sms

			  //2015 Vancouver Ride exception
              ."&".$var_prefix."_".$survey_id."_18_77621=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_77622=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_77604=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_23_78992=".$sms


			  //2015 Alberta Ride exception
              ."&".$var_prefix."_".$survey_id."_18_77564=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_77565=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_2_77547=".urlencode($refer)
              ."&".$var_prefix."_".$survey_id."_23_78965=".$sms

			  //2015 Montreal Ride exception
              ."&".$var_prefix."_".$survey_id."_20_77588=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_77587=".$rfi_id
			  ."&".$var_prefix."_".$survey_id."_18_77586=".$language
			  //."&".$var_prefix."_".$survey_id."_1_58044="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_2_77569=".urlencode($refer)
			  ."&".$var_prefix."_".$survey_id."_24_78994=".$sms


			  // 2015 New York Ride exception
              ."&".$var_prefix."_".$survey_id."_10_7829=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_11_7830=".$rfi_id
			  ."&".$var_prefix."_".$survey_id."_1_7820=".urlencode($refer)

			  // 2015 Chicago Ride exception
              ."&".$var_prefix."_".$survey_id."_10_8089=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_11_8090=".$rfi_id
			  ."&".$var_prefix."_".$survey_id."_1_8080=".urlencode($refer)

//2014 Ride Exceptions

			  //2014 Alberta Ride exception
              ."&".$var_prefix."_".$survey_id."_18_70722=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_70723=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_1_70705=".urlencode($refer)

			  //2014 Montreal Ride exception
              ."&".$var_prefix."_".$survey_id."_20_70746=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_70745=".$rfi_id
			  ."&".$var_prefix."_".$survey_id."_18_70744=".$language
			  //."&".$var_prefix."_".$survey_id."_1_58044="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_70727=".urlencode($refer)

			  //2014 Toronto Ride exception
              ."&".$var_prefix."_".$survey_id."_9_70758=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_70759=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_1_70750=".urlencode($refer)

			  //2014 Vancouver Ride exception
              ."&".$var_prefix."_".$survey_id."_18_70779=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_70780=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_1_70762=".urlencode($refer)

			  // 2014 Washington DC Ride exception
              ."&".$var_prefix."_".$survey_id."_10_5209=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_11_5210=".$rfi_id
              //."&".$var_prefix."_".$survey_id."_1_2460="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_5200=".urlencode($refer)

		      // 2014 Philadelphia Ride exception
			  ."&".$var_prefix."_".$survey_id."_10_5329=".urlencode($event_name)
			  ."&".$var_prefix."_".$survey_id."_11_5330=".$rfi_id
			  //."&".$var_prefix."_".$survey_id."_1_2460="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_5320=".urlencode($refer)

			  // 2013 Brisbane exception
              ."&".$var_prefix."_".$survey_id."_9_5628=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_5629=".$rfi_id
              //."&".$var_prefix."_".$survey_id."_1_1760="."-+-+-"
              ."&".$var_prefix."_".$survey_id."_1_8000=".urlencode($refer)

			  // 2013 Melbourne exception
              ."&".$var_prefix."_".$survey_id."_9_5664=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_5665=".$rfi_id
              //."&".$var_prefix."_".$survey_id."_1_2460="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_5656=".urlencode($refer)

			  // 2013 Sydney exception
              ."&".$var_prefix."_".$survey_id."_9_5640=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_5641=".$rfi_id
              //."&".$var_prefix."_".$survey_id."_1_3016="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_5632=".urlencode($refer)

			  // 2013 Perth exception
              ."&".$var_prefix."_".$survey_id."_9_5652=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_10_5653=".$rfi_id
              //."&".$var_prefix."_".$survey_id."_1_3080="."-+-+-"
              ."&".$var_prefix."_".$survey_id."_1_5644=".urlencode($refer)

			  // 2013 Toronto WEBC exception
			  //."&".$var_prefix."_".$survey_id."_1_81260="."-+-+-"
              ."&".$var_prefix."_".$survey_id."_18_86674=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_86675=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_1_86657=".urlencode($refer)

			  // 2013 Montreal WEBC exception
              ."&".$var_prefix."_".$survey_id."_20_86654=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_86653=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_17_86651=".$language
			  //."&".$var_prefix."_".$survey_id."_1_81220="."-+-+-"
			  ."&".$var_prefix."_".$survey_id."_1_86635=".urlencode($refer)

			  // 2012 Toronto WEBC exception
			  ."&".$var_prefix."_".$survey_id."_1_81260="."-+-+-"
              ."&".$var_prefix."_".$survey_id."_18_81277=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_81278=".$rfi_id

			  // 2012 Alberta WEBC exception
			  ."&".$var_prefix."_".$survey_id."_1_81200="."-+-+-"
              ."&".$var_prefix."_".$survey_id."_18_81217=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_81218=".$rfi_id

			  // 2012 Montreal WEBC exception
              ."&".$var_prefix."_".$survey_id."_20_81238=".urlencode($event_name)
              ."&".$var_prefix."_".$survey_id."_19_81239=".$rfi_id
              ."&".$var_prefix."_".$survey_id."_17_81236=".$language
			   ."&".$var_prefix."_".$survey_id."_1_81220="."-+-+-"

              ."&ACTION_SUBMIT_SURVEY_RESPONSE=Submit"
              ."&SURVEY_ID=".$survey_id
              ."&USER_HAS_TAKEN=null"
              ."&SURVEY_IGNORE_ERRORS=TRUE"
              ."&QUESTION_STAG_APP_ID="
              ."&QUESTION_STAG_APP_REF_ID="
              ."&QUESTION_STAG_CTX_TYPE="
              //."&ERRORURL=".urlencode("http://in10.endcancer.org/site/PageServer?pagename=RFI_2010")
              //."&ERRORURL=".urlencode($referring_url."?error")
              ."&denySubmit=";

//echo $post_data;

  curl_setopt ($ch,CURLOPT_USERAGENT,'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; GTB0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 1.1.4322; .NET CLR 3.5.21022; .NET CLR 3.5.30729; .NET CLR 3.0.30618; OfficeLiveConnector.1.4; OfficeLivePatch.1.3)');

  curl_setopt ($ch, CURLOPT_POSTFIELDS, $post_data);
  $html_response = curl_exec ($ch);
  curl_close ($ch);

//if (strtolower($instance_id) == "cfuaca")
//{
//  echo $html_response;
//  return;
//}

  // look for the confirmation string: ab10_RFI_Confirmation - ab17_get_info_requested
  // or error string: $referring_url."?error"

  $confirmation = "RFI_Confirmation";
  $error = "?error";

  if( strpos($html_response, $confirmation) === true)
  {
    $process_status = "X";
  }
  else
  {
    $process_status = "1";
  }
}

//$userinfo = array(
//					"email" => $_POST['email'] ,
//					"firstname" => $_POST['first_name'] ,
//					"lastname" => $_POST['last_name'] ,
//					"address" => $_POST['address'] ,
//					"city" => $_POST['city'] ,
//					"state" => $_POST['province'] ,
//					"zip" => $_POST['zip_code'] ,
//					"phone" => $_POST['phone'] ,
//          "source_code" => $_POST['source_code'] ,
//          "rfi_event_name" => $_POST['event_name']
//				 );

//$results = ProcessRFI($userinfo, $_POST['rfi_id'], $_POST['instance']);
//$site_id = $results[0]["site_id"];
//$cons_id = $results[0]["cons_id"];
//$convio_added_dt = (isset($results[0]["cons_id"]) ? date( 'Y-m-d H:i:s' ) : null);
//$message = $results[0]["message"];

//mysql_query("INSERT INTO `formhandler_1` ( `id` , `created` , `rfi_id` , `INSTANCE` , `EVENT_NAME` , `FIRST_NAME` , `LAST_NAME` , `ADDRESS` , `ADDRESS2` ,`CITY` ,`PROVINCE` , `ZIP_CODE`, `COUNTRY` , `PHONE` , `EMAIL` , `SOURCE_CODE` , `CONS_ID` , `CONVIO_ADDED_DATETIME` , `PROCESS_STATUS` )

//VALUES (NULL , CURRENT_TIMESTAMP , '$rfi_id', '$instance_id' , '$event_name' , '$first_name' ,'$last_name', '$address', '$address2', '$city', '$province', '$zip_code', '$country', '$phone', '$email', '$source_code', '$cons_id', '$convio_added_dt', '$process_status')") or die(mysql_error());

mysql_query("INSERT INTO `rfi` ( `id` , `created` , `rfi_id` , `INSTANCE` , `EVENT_NAME` , `FIRST_NAME` , `LAST_NAME` , `ADDRESS` , `ADDRESS2` ,`CITY` ,`PROVINCE` , `ZIP_CODE`, `COUNTRY` , `PHONE` , `EMAIL` , `SOURCE_CODE` , `PROCESS_STATUS` )

VALUES (NULL , CURRENT_TIMESTAMP , '$rfi_id', '$instance_id' , '$event_name' , '$first_name' ,'$last_name', '$address', '$address2', '$city', '$province', '$zip_code', '$country', '$phone', '$email', '$source_code', '$process_status')") or die(mysql_error());

if ($process_status == "1")
{
  echo '<META HTTP-EQUIV="Refresh" Content="0; URL='.$redirect.'">';//This is the correct approach to avoid header warnings.
  //header("Location: " . $redirect); /* Redirect browser */
  //header("Location: " . $redirect . '&' . $_SERVER['QUERY_STRING']);
  exit;
}
else
{
  echo '<META HTTP-EQUIV="Refresh" Content="0; URL='.$referring_url.'?error='.$process_status.'">';//This is the correct approach to avoid header warnings.
  //header("Location: ".$referring_url."?error=".$process_status); /* Redirect browser */
  exit;
}

//var_dump($results);

function isValidEmail($email){
	return eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email);
}
?>