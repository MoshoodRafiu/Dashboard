$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#infoToggler').on('click', function () {
        $('#userInfo').toggle(500);
    });
});