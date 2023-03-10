// JavaScript source code
$(document).ready(function () {
    /* Add divs for each sutra */
    $('#gContent').append('<div id="coming"></div>')
    $('#gContent').append('<div id="credits"></div>')
    $('#gContent').append('<div id="home"></div>')
    $('#gContent').append('<div id="mangal"></div>')

    for (var i = 1; i <=33; i++)
    {
        $('#gContent').append('<div id="1-' + i + '"></div>')
        //alert('<div id="1-' + i + '"></div>');
    }

    /* Add menu items */

    /*Chapter 1*/
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-1\');"> 1.1 - मोक्ष की प्राप्ति का उपाय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-2\');"> 1.2 - ﻿सम्यग्दर्शन का लक्षण </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-3\');"> 1.3 - सम्यग्दर्शन के भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-4\');"> 1.4 - सात तत्त्व </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-5\');"> 1.5 - निक्षेपों का कथन </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-6\');"> 1.6 - तत्त्वों को जानने का उपाय</a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-7\');"> 1.7 - तत्त्वों को जानने का अन्य उपाय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-8\');"> 1.8 - जीव आदि को जानने के और भी उपाय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-9\');"> 1.9 - ﻿ज्ञान के भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-10\');"> 1.10 - ज्ञान ही प्रमाण है </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-11\');"> 1.11 - ﻿परोक्ष प्रमाण </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-12\');"> 1.12 - ﻿प्रत्यक्ष प्रमाण ज्ञान </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-13\');"> 1.13 - ﻿परोक्ष प्रमाण के संबंध में विशेष कथन </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-14\');"> 1.14 - मतिज्ञान किससे उत्पन्न होता है? </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-15\');"> 1.15 - मतिज्ञान के भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-16\');"> 1.16 - ﻿अवग्रह आदि ज्ञानों के और भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-17\');"> 1.17 - बहु बहुविध आदि किसके विशेषण हैं? </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-18\');"> 1.18 - ﻿अवग्रह आदि ज्ञान का नियम </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-19\');"> 1.19 - ﻿व्यंजनावग्रह सभी इन्द्रियों से नही होता </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-20\');"> 1.20 - ﻿श्रुतज्ञान का स्वरूप </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-21\');"> 1.21 - अवधिज्ञान के भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-22\');"> 1.22 - ﻿अवधिज्ञान के स्वामी </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-23\');"> 1.23 - मनःपर्यय के भेद </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-24\');"> 1.24 - ﻿मनःपर्यय के दोनो भेदों में विशेषता </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-25\');"> 1.25 - ﻿अवधिज्ञान, मनःपर्यय ज्ञान में अन्तर </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-26\');"> 1.26 - मतिज्ञान और श्रुतज्ञान का विषय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-27\');"> 1.27 - ﻿अवधिज्ञान का विषय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-28\');"> 1.28 - ﻿मनःपर्यय ज्ञान का विषय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-29\');"> 1.29 - ﻿केवल ज्ञान का विषय </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-30\');"> 1.30 - एक साथ कितने ज्ञान संभव? </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-31\');"> 1.31 - ﻿कौन-कौन से ज्ञान मिथ्या भी होते हैं? </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-32\');"> 1.32 - मिथ्यादृष्टि का ज्ञान मिथ्या क्यों? </a></li>')
    $('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=1-33\');"> 1.33 - ﻿नय के भेद </a></li>')

    /*Chapter 3*/
    //$('#ch1Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=2-1\');"> 2.1- ﻿Coming soon... </a></li>')
    /*Chapter 4*/
    /*Chapter 5*/
    /*Chapter 6*/
    /*Chapter 7*/
    /*Chapter 8*/
    /*Chapter 9*/
    /*Chapter 10*/




    var result = get_query();
    loadContent('tatvarth/' + result + '.html', '#' + result);

});


function get_query() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "gatha" in eg "https://example.com/?some_key=some_value"
    //let value = params.gatha; // "some_value"
    return params.gatha; // "gatha"
}
var reload = function (qs) {
    var url = window.location.origin + '/tatvarth.html' + qs;
    $(location).prop('href', url)
}
var loadContent = function (gatha, section) {
    $(section).load(gatha);
}

function displayTabData(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}