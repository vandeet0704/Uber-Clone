$("#dropbtn").click(function () {
    // Change background color of nav items on click
    $("#myDropdown").toggle(75, function () {
        if($("#myDropdown").is(":visible")){
            $("#dropbtn").css("background-color", "#555555");
        } else{
            $("#dropbtn").css("background-color", "black");
        }
    });
    
});

//On reload
var windowWidth = $(window).width();
if(windowWidth < 1080){
    $("#desktop-navbar").hide();
    $("#mobile-navbar").show();
}
else{
    $("#desktop-navbar").show();
    $("#mobile-navbar").hide();
}

// Function to make the website responsive
window.addEventListener('resize', function () {
    var windowWidth = $(window).width();
    if(windowWidth < 1080){
        $("#desktop-navbar").hide();
        $("#mobile-navbar").show();
    }
    else{
        $("#desktop-navbar").show();
        $("#mobile-navbar").hide();
        $("#menu-overlay").hide();
    }
});

// To toogle menu overlay in mobile mode
$("#menu-btn").click(function () {
    if($("#menu-overlay").is(":visible")){
        $("#menu-overlay").slideUp(100);
        $("#menu-btn").css("background-color", "black");
        $("#menu-btn").html("<i class='fa-solid fa-bars'></i>")
    } else{
        $("#menu-overlay").slideDown(100);
        $("#menu-btn").css("background-color", "#555555");
        $("#menu-btn").html("<i class='fa-solid fa-xmark'></i>")
    }
})