/*------------------
START: by baobao18 /
-----------------*/
let jQueryLoaded = false;
window.onload = function () {
	if (!window.jQuery) {
		console.error(
			"Require jQuery Library, may forget to include in HTML script."
		);
	} else {
		jQueryLoaded = true;
	}
};

$("label.is-checkbox").on("click", function () {
	const inputId = $(this).children("input[type=checkbox]").attr("id");
	const inputObj = $("label.is-checkbox > input[type=checkbox]#" + inputId);
	inputObj.attr("checked", !inputObj.attr("checked"));
});

/*-------------
END: baobao18 /
------------*/



function activeTab(obj)
{
    $('.tab-wrapper ul li').removeClass('active');
 
    $(obj).addClass('active');
 
    var id = $(obj).find('a').attr('href');
 
    $('.tab-item').hide();
 
    $(id) .show();
}

$('.tab li').click(function(){
    activeTab(this);
    return false;
});

activeTab($('.tab li:first-child'));
