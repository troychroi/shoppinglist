$(document).ready(function() {
	
	enterItem = []
	itemNumber = 0

	/* function check_delete() {
		$('#itemsListed').find('li').on('click', function() {
			$(this).toggleClass('checked');
			$(this).append('<hr />');
			$(this).append('<button>X</button>');
			$(this).find('button').addClass('trash');
			$('li').not('.checked').find('hr').remove();
			$('li').not('.checked').find('button').remove();
			$('.trash').on('click', function() {
				$(this).closest('li').remove();
				if (itemNumber >= 1) {
					itemNumber --;
				}
				console.log(itemNumber);
			});
		});
	} */

	// mark item as checked and add delete functionality 
	function check() {
		$('#itemsListed').on('click', 'li', function() {	
			$(this).toggleClass('checked');
			$(this).append('<hr />');
			$(this).append('<button>X</button>');
			$(this).find('button').addClass('trash');
			$(this).not('.checked').find('hr').remove();
			$(this).not('.checked').find('button').remove();
		});
	}

	// the delete functionality
	function trash() {
		$('.checked').on('click', 'button', function() {
			$(this).closest('li').remove();
				if (itemNumber >= 1) {
					itemNumber --;
				}
		});
	}



	// enable add button
	$('.addButton').on('click', function() {
		alert($('#itemInput').find('input').val());
		if ($('#itemInput').find('input').val() != '') {
			if (itemNumber <= 0) {
				// push entered items into blank enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				trash();
				itemNumber ++;
				console.log(itemNumber);
			} else if (itemNumber > 0) {
				// add entered items into previously populated enterItem array
				enterItem.push($('#itemInput').find('input').val());
				$('#itemsListed').prepend('<li>'+ enterItem[itemNumber] +'</li>');
				$('#itemInput').find('input').val('');
				check();
				trash();
				itemNumber ++;
				console.log(itemNumber);
			}
		}
	});

	// adding items to the list 
	$(document).keydown(function(event){
		if (event.which == 13 && enterItem == []) {
			// push entered items into blank enterItem array
			enterItem.push($('#itemInput').find('input').val());
			$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
			$('#itemInput').find('input').val('');
			check();
			trash();
			itemNumber ++;
			console.log(itemNumber);
		} else if (event.which == 13) {
			// add entered items into previously populated enterItem array
			enterItem.push($('#itemInput').find('input').val());
			$('#itemsListed').prepend('<li>'+ enterItem[itemNumber] +'</li>');
			$('#itemInput').find('input').val('');
			check();
			trash();
			itemNumber ++;
			console.log(itemNumber);
		}
	});
});