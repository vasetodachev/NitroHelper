window.addEventListener('DOMContentLoaded', function() {
    // Buttons listed below
    var nonitro = document.getElementById('nonitro');
    // onClick's logic for Nonitro:
    nonitro.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{                         
                       const tab=tabs[0];
                       let test = document.getElementsByName('generator')[0].getAttribute('content')
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
     let r = (Math.random() + 1).toString(36).substring(7);
    // onClick's logic for test optimization with random parametr:
    demotest.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       let destUrl = new URL(tab.url);
                        destUrl.searchParams.set("testnitro", r);
                        chrome.tabs.create({url: destUrl.href});
                       //chrome.tabs.create({url: tab.url + "?testnitro=" + r});
                       }
                        )
    }); 
    var richresultstest = document.getElementById('richresultstest');
    // onClick's logic for Mobile-Friendly Test by Google:
    richresultstest.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "https://search.google.com/test/rich-results?url=" + tab.url});
                       }
                        )
    });
    var viewsource = document.getElementById('viewsource');
    // onClick's logic for Mobile-Friendly Test by Google:
    viewsource.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true, currentWindow: true},
            tabs=>{
                       const tab=tabs[0];
                       chrome.tabs.create({url: "view-source:" + tab.url});
                       }
                        )
    });
});
