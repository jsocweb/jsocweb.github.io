// JavaScript source code
$(document).ready(function () {
    /* Add menu items */
    $.getJSON('tatvarth/data/menuitems.json', function (dt) {
        $.each(dt, function (key, val) {
            //console.log(val.id);
            if (val.chapter == 1) {
                $('#ch' + val.chapter + 'Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=' + val.chapter + '-' + val.sutra + '\');"> ' + val.chapter + '.' + val.sutra + ' ﻿- ' + val.title + '</a></li>')
            }
            else {
                $('#ch' + val.chapter + 'Submenu').append('<li><a href = "#" onclick = "reload(\'?gatha=coming\');"> ' + val.chapter + '.' + val.sutra + ' ﻿- ' + val.title + '</a></li>')
            }
        });
    });

    /* Add constant data divs */
    //$('#gContent').append('<div id="coming"></div>')
    $('#gContent').append('<div id="credits"></div>')
    $('#gContent').append('<div id="home"></div>')
    $('#gContent').append('<div id="mangal"></div>')

    var result = get_query();
    /* Add dynamic data divs per requested sutra*/
    $('#gContent').append('<div id="' + result + '"></div>')
    var newUrl = "";
    switch (result) {
        case "home":
            var wurl = window.location.origin + '/tatvarth.html?gatha=' + result + '';
            var message = "*Daily Swadhyay: Tatvarth Sutra Ji* %0a%0a _*आचार्य उमास्वामी विरचित*_%0a*तत्त्वार्थसूत्र*%0a%0a*Ācārya Umāsvāmī’s*%0a*Tattvārthasūtra*%0a----------------------------------%0a%0a*प्रस्तावना*%0a%0aआचार्य उमास्‍वामी कृत मोक्षमार्ग, तत्त्वार्थ दर्शन विषयक 10 अध्‍यायों में सूत्रबद्ध ग्रन्‍थ है। कुल सूत्र 357 हैं। इसी को मोक्षशास्‍त्र भी कहते हैं। दिगम्‍बर व श्‍वेताम्‍बर पंथों दोनों को समान रूप से मान्‍य है। जैन आम्‍नाय में यह सर्व प्रधान सिद्धान्‍त ग्रन्‍थ माना जाता है। जैन दर्शन प्ररूपक होने के कारण यह जैन गीता के रूप में समझा जाता है।%0a%0aइस भावना से प्रेरित होकर की हम सभी श्रावकों को जैन धर्म के मर्म की जानकारी प्राप्त हो, हमने तत्वार्थसूत्र ग्रंथ के सूत्र को अर्थ एवं विशेषार्थ के रूप में यहाँ संयोजित करने का प्रयास किया है | हमने प्रस्तुत अर्थ, ग्रंथों से लिया है | उम्मीद है कि आप सभी लोगों को हमारी ये कोशिश पसंद आएगी एवं आप सभी अपना समय दे कर इसका लाभ उठायेंगे | इस संयोजन में यदि हमसे कोई त्रुटि हुई हो तो कृप्या आप उसे हमें अवश्य बताएँ तो हम उसे सही कर सकें | हम वीर प्रभु से प्रार्थना करते हैं की हम इस कार्य को पूरा कर सकें, इसके लिए आप सभी का सहयोग अपेक्षित है |%0a%0aContinue reading... " + wurl + "";
            message = message.replace('<br />', '%0a').replace('<p>', '_').replace('</p>', '_');
            newUrl = "https://wa.me/?text=" + message + ""
            $('#awhatsapp').attr("href", newUrl);
            
        case "mangal":
            if (!newUrl) {
                // newUrl was empty string, false, 0, null, undefined, ...
                var wurl = window.location.origin + '/tatvarth.html?gatha=' + result + '';
                var message = "*Daily Swadhyay: Tatvarth Sutra Ji* %0a%0a _*मंगलाचरण*_%0a----------------------------------%0a%0a*मोक्ष-मार्गस्य नेतारं, भेत्तारं कर्म-भूभृताम्‌।%0aज्ञातारं विश्व - तत्त्वानां, वन्दे तद्गुण - लब्धये॥*%0a%0a*अर्थ:* जो मोक्षमार्ग का प्रवर्तक है, कर्मरूपी पर्वतों का भेदन करने वाला है और समस्त तत्त्वों को जानता है, उसे मैं उन गुणों की प्राप्ति के लिए नमस्कार करता हूँ।%0a%0a*Meaning:* I make obeisance to the Omniscient Lord – the promulgator of the path to liberation, the destroyer of the mountains of karmas, and the knower of the whole of reality – so that I may realize these qualities.%0a%0aContinue reading... " + wurl + "";
                message = message.replace('<br />', '%0a').replace('<p>', '_').replace('</p>', '_');
                newUrl = "https://wa.me/?text=" + message + ""
                $('#awhatsapp').attr("href", newUrl);
            }

        case "credits":
            //$('#awhatsapp').hide();
            loadContent('tatvarth/' + result + '.html', '#' + result);
            break;
        case "coming":
            //$('#awhatsapp').hide();
            loadContent('tatvarth/coming.html', '#' + result);
            break;
        default:
            loadContent('tatvarth/content.html', '#' + result);
            
            $.getJSON('tatvarth/data/' + result + '.json', function (dt) {
                $('#chapter').html(dt.chapter);
                $('#title').html(dt.title);
                $('#sutra').html(dt.sutra);
                $('#audiosrc').html('<audio controls controlsList="nodownload"><source src="tatvarth/audio/' + dt.audiosrc + '" type="audio/mpeg"></audio><br />उच्चारण - आर्यिका 105 पूर्णमती माता जी के मधुर स्वर में।');
                $('#arth').html('<b><font color=darkmagenta>अर्थ : </font></b>' + dt.arth);
                $('#meaning').html('<b><font color=darkmagenta>Meaning : </font></b>' + dt.meaning);
                $('#vishesharth').html('<p class=\"paragraph\">' + dt.vishesharth + '</p>');
                $('#explanation').html('<p class=\"paragraphE\">' + dt.explanation + '</p>');
                $.each(dt.vidsrc, function (index, value) {
                    $('#vidsrc').append(value);
                });

                var wurl = window.location.origin + '/tatvarth.html?gatha=' + result + '';
                var message = "*Daily Swadhyay: Tatvarth Sutra Ji* %0a%0a _*" + dt.chapter + "*_%0a----------------------------------%0a%0a" + dt.title + "%0a*सूत्र: " + dt.sutra + "*%0a%0a*अर्थ:* " + dt.arth + "%0a%0a*Meaning:* " + dt.meaning + "%0a%0aContinue reading... " + wurl + "";
                message = message.replace('<br />', '%0a').replace('<p>', '_').replace('</p>', '_');
                newUrl = "https://wa.me/?text=" + message +""
                $('#awhatsapp').show();
                $('#awhatsapp').attr("href", newUrl);
            });
    }
    
    const gathaArray = result.split("-");
    var prev = gathaArray[0] + '-' + (parseInt(gathaArray[1]) - 1);
    var next = gathaArray[0] + '-' + (parseInt(gathaArray[1]) + 1);

    if (gathaArray[0] == 1) {
        if (gathaArray[0]==1 && gathaArray[1] == 1) {
            prev = 'mangal';
        }
        else if (gathaArray[0] == 1 && gathaArray[1] == 33) {
            //next = '2-1';
            next = 'coming';
        }
    }
    /*Uncomment below code to release the chapters*/

    /*else if (gathaArray[0] == 2) {
        if (gathaArray[0] == 2 && gathaArray[1] == 1) {
            prev = '1-33';
        }
        else if (gathaArray[0] == 2 && gathaArray[1] == 53) {
            next = '3-1';
        }
    }
    else if (gathaArray[0] == 3) {
        if (gathaArray[0] == 3 && gathaArray[1] == 1) {
            prev = '2-53';
        }
        else if (gathaArray[0] == 3 && gathaArray[1] == 39) {
            next = '4-1';
        }
    }
    else if (gathaArray[0] == 4) {
        if (gathaArray[0] == 4 && gathaArray[1] == 1) {
            prev = '3-39';
        }
        else if (gathaArray[0] == 4 && gathaArray[1] == 42) {
            next = '5-1';
        }
    }
    else if (gathaArray[0] == 5) {
        if (gathaArray[0] == 5 && gathaArray[1] == 1) {
            prev = '4-42';
        }
        else if (gathaArray[0] == 5 && gathaArray[1] == 42) {
            next = '6-1';
        }
    }
    else if (gathaArray[0] == 6) {
        if (gathaArray[0] == 6 && gathaArray[1] == 1) {
            prev = '5-42';
        }
        else if (gathaArray[0] == 6 && gathaArray[1] == 27) {
            next = '7-1';
        }
    }
    else if (gathaArray[0] == 7) {
        if (gathaArray[0] == 7 && gathaArray[1] == 1) {
            prev = '6-27';
        }
        else if (gathaArray[0] == 7 && gathaArray[1] == 39) {
            next = '8-1';
        }
    }
    else if (gathaArray[0] == 8) {
        if (gathaArray[0] == 8 && gathaArray[1] == 1) {
            prev = '7-39';
        }
        else if (gathaArray[0] == 8 && gathaArray[1] == 26) {
            next = '9-1';
        }
    }
    else if (gathaArray[0] == 9) {
        if (gathaArray[0] == 9 && gathaArray[1] == 1) {
            prev = '8-26';
        }
        else if (gathaArray[0] == 9 && gathaArray[1] == 47) {
            next = '10-1';
        }
    }
    else if (gathaArray[0] == 10) {
        if (gathaArray[0] == 10 && gathaArray[1] == 1) {
            prev = '9-47';
        }
        else if (gathaArray[0] == 10 && gathaArray[1] == 9) {
            next = 'credits';
        }
    }
    */
    $(document).on("click", "#btnprev", function () {
        reload('?gatha=' + prev + '');
    });
    $(document).on("click", "#btnnext", function () {
        reload('?gatha=' + next +'');
    });

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