window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var nonitro = document.getElementById('nonitro');
    // onClick's logic below:
    nonitro.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: tab.url + "?nonitro"});
                       }
                        )
    });
    

    var runpsi = document.getElementById('runpsi');
    // onClick's logic below:
    runpsi.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "https://pagespeed.web.dev/report?url=" + tab.url});
                       }
                        )
    });
    
});



