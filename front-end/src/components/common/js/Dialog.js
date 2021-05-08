
export const DialogDidMount = () => {
 
    (function() {
        // Variables
        var panel     = document.getElementById("js-panel");
        var btns      = document.querySelectorAll(".flap__btn");
        
        // On load, init panel
        var init = function() {
          panel.classList.add("is--open");
          
          // If btns are clicked, hide panel
          // Show replay button    
          for (var i=0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
              hidePanel();
            });
          }
          
          function hidePanel() {
            panel.classList.remove("is--open");
          }
          
        
        }
        
        // On load, call init function
        window.onload = function() {
          init();
        }
      })();
};
