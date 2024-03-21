$(document).ready(function() {
    // Show phase details on hover
    $(".phase").hover(function() {
        $(this).find(".phase-details").slideDown(200);
    }, function() {
        $(this).find(".phase-details").slideUp(200);
    });
});
