1. getElementsById can access only one  html elemnets by id . getElementsByClassName can access multiple html elements by their class .  querySelector access the one elements by id or class or tag but if there is multiple matching elements it takes only the first one . querySelectorAll can access any elements using id class or tag.
2. first i creat an html tag using createElements and then access its parent using selector and push it using appendChild
3. in DOM when a event occurs  the event first happens on the child element then moves up to its parent grandparent
4. event delegation is a methode where we use event listener to the parents insted of using it to the child . when there is multiple child we need to add event listener multiple time but using event delegation we can do that same thing using one eventListener.
   preventDefault() stop the default behaviour of browser . stopPropagation() stop event bubbling
