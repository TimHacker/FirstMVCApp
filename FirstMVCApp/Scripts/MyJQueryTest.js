/* File Created: December 22, 2011 */

$(function () {
	$('#box').click(function () {
		$(this).animate({
			"top": "+=300px"
		}, 4000);

		$(this).animate({ "width": "50px" }, 4000);
	});
});