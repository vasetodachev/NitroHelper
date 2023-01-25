window.addEventListener('DOMContentLoaded', function() {
    // Buttons listed below
    var nonitro = document.getElementById('nonitro');
    // onClick's logic for Nonitro:
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
    // onClick's logic PSI test:
    runpsi.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "https://pagespeed.web.dev/report?url=" + tab.url});
                       }
                        )
    });

    var demotest = document.getElementById('demotest');
    // onClick's logic for NitroPack demo test:
    demotest.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "https://nitropack.io/demo#" + tab.url});
                       }
                        )
    });

    var mobiletest = document.getElementById('mobiletest');
    // onClick's logic for Mobile-Friendly Test by Google:
    mobiletest.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "https://search.google.com/test/mobile-friendly?url=" + tab.url});
                       }
                        )
    });

     var demotest = document.getElementById('testconfig');
     var randomNum = Math.floor(Math.random()*10);
     let r = (Math.random() + 1).toString(36).substring(7);
    // onClick's logic for test optimization with random parametr:
    demotest.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: tab.url + "?test=" + r});
                       }
                        )
    }); 
});
