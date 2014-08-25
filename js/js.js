$(document).ready(function() {
	
	var enterItem = [];
	var itemNumber = 0; 


	// mark item as checked and add delete functionality 
	function check() {
		$('#itemsListed').on('click', 'li', function() {	
			$(this).toggleClass('checked');
			$(this).append('<hr />');
			// visually smooth 
			$(this).find('hr').animate({'width': '516px'});
			$(this).append('<button class="trash">X</button>');
			// visually smooth 
			$(this).find('.trash').animate({'opacity': '1'});
			$(this).not('.checked').find('hr').remove();
			$(this).not('.checked').find('button').remove();
			// enable trash or delete functionality individual list items
			$('.trash').on('click', function() {
				$(this).closest('li').remove();
			});
		});
	}

	// enable add button
	$('.addButton').on('click', function() {
		// prevent emptiness being pushed into array
		if ($('#itemInput').find('input').val() !== '') {
			if (itemNumber === 0) {
				// push entered items into blank enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				$('#itemInput').find('input').focus();
				itemNumber ++;
			} else if (itemNumber > 0) {
				// add entered items into previously populated enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').prepend('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				$('#itemInput').find('input').focus();
				itemNumber ++;
			}
		}
	});

	// adding items to the list on pressing enter
	$(document).keydown(function(event){
		// prevent emptiness being pushed into array
		if ($('#itemInput').find('input').val() !== '') {
			if (event.which == 13 && enterItem === []) {
				// push entered items into blank enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				itemNumber ++;
			} else if (event.which == 13) {
				// add entered items into previously populated enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').prepend('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				itemNumber ++;
			}
		}
	});
});