Template.footer.events({
 
  // This is the keypress input method, and we pass through the "e" variable
 'keypress input': function(e) {


    var inputVal = $('.input-box_text').val();

    //double exclamation mark means 'not not'; it converts an object to a boolean,
    //inverses it, then inverses it again
    if(!!inputVal) {

      // charCode returns unicode character code of the key that executed the onkeypress event.
      // The unicode character code is the number of a character.
      // e.which : e.keycode gets the ASCII code of the typed character onkeypress
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;


      // Charcode of 13 means 'enter' in Javascript. When the user presses 'enter', execute this code
      if (charCode == 13) {

        // stops parent event handlers from executing
        e.stopPropagation();

        // Pass data from the Meteor.call statements into the method
        Meteor.call('newMessage', {
          text: $('.input-box_text').val(),

          // get the value of the session variable 'channel'
          channel: Session.get('channel')
        });

        // After submitting a post/comment, clear the text box. 
        $('.input-box_text').val("");
        return false;
      }    
    }


    // look more into this code 
  }
});