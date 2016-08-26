//when click check, highlight box aka change color of box
$(document).ready(function() {

// make box with class shopping item name and buttons
	$("form").submit(function(event) {
		var userInput = $("#shopping-list-entry").val()
		event.preventDefault();
		$('ul').append('<li>'
			+ "<span class='shopping-item'>"
			+ userInput 
			+ "</span>" 
			+ "<div class='shopping-item-controls'>" 
			+ "<button class='shopping-item-toggle'>" 
			+ "<span class='button-label'>" 
			+ "check" + "</span>" +"</button>"
			+ " "
			+ "<button class='shopping-item-delete'>" 
			+ " <span class='button-label'>" 
			+ "delete" 
			+ "</span>" 
			+ "</button>" )
		userInput = ""
		$('#shopping-list-entry').val(userInput)
	})
//when click delete, get rid of box
	$(".shopping-list").on('click', '.shopping-item-delete', function(event) {
  		$(this).closest('li').remove();
  	});

//when click check, crosses list item
	$(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});

//two buttons
//first button when clicked on display checked off items
//second button when click on display uncheked items

	$('.feature-box').on('click','.checked',function(event) {
		$(".shopping-item").closest('li').hide()
		$(".shopping-item__checked").closest('li').show()
	});

	$('.feature-box').on('click','.unchecked',function(event) {
		$(".shopping-item").closest('li').show()
		$(".shopping-item__checked").closest('li').hide()	
	});

});
