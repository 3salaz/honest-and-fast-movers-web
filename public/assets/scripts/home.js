$(document).ready(function() {
    let earnAndLearnData = {
        client : {
            name: "Earn And Learn"
        }
    },
    home = document.getElementById('content-home'),
    clientName = document.getElementById('clientName');

    let setPageData = (() => {
        clientName.innerHTML = earnAndLearnData.client.name;
    })
    let setPageStructure = (() => {
        home.classList.add('row');
        home.classList.add('container');
    })
    setPageData();
    setPageStructure();
    
    
});