	

// Single state object
var state = {
	grocItem: ""
};

// State modification: state.grocItem equal to the grocery item that the
// user entered. 
var addItem = function(state, item) {
	state.grocItem = `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
};

function removeItem() {
  $(this).closest("li").css("border","none");
  $(this).closest("li").empty();
}

function renderGrocItem() {
  console.log("made it to renderGrocItem" + state.grocItem);
	$('.shopping-list').append(state.grocItem);

}


// Event listeners
//event for submit
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderGrocItem();
});


//event for click:  given 2 cases - check button and delete button 
$(document).on("click", "button", function(event) {
    var btnClass = this.getAttribute("class");
    switch(btnClass) {
      case "shopping-item-toggle":
        $(this).closest("li").children("span").toggleClass("shopping-item__checked");
        break;
      case "shopping-item-delete": 
        $(this).closest("li").remove();
        break;
      default:
        console.log("probably adding an item");
      }
        
});
    
  





