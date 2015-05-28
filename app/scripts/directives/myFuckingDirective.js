'use strict';

/**
 * @ngdoc directive
 * @name mcorganizerApp.directive:myFuckingDirective
 * @description
 * # myFuckingDirective
 */
angular.module('mcorganizerApp')
  .directive('myFuckingDirective', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs, parent, http) {
      	//Regarde les changement asynchrones sur les variables du scope imac1 à 3
        scope.$watchCollection('[imac1, imac2, imac3]', function(newValues, oldValues, scope){
        	 console.log("listener triggered newValues=", newValues, ", oldValues=", oldValues); 
        		if(newValues[0] != undefined && newValues[1] != undefined && newValues[2] != undefined){
        			//Quand toutes les requetes sont passées au scope, on crée le paperjs
        			initPaper(newValues);
        		}
        });

        var path;
        var drag = false;

        function mouseUp(event) {
            //Clear Mouse Drag Flag
            drag = false;
        }

        function mouseDrag(event) {
            if (drag) {
                path.add(new paper.Point(event.layerX, event.layerY));
                path.smooth();
            }
        }

        function mouseDown(event) {
            //Set  flag to detect mouse drag
            drag = true;
            path = new paper.Path();
            path.strokeColor = 'black';
            path.add(new paper.Point(event.layerX, event.layerY));
        }

        function initPaper(imacObject) {
        	console.log("init Paper");

        	for(var i=0; i < imacObject.length; i++){
        		console.log(imacObject[i]);
        	}
            paper.install(window);
            paper.setup('mapCanvas');

            var roundRect = new Shape.Rectangle({
	            center: [100, 400],
	            size: [50, 100],
	            radius: [15, 20],
	            fillColor: 'orange',
	            strokeColor: 'black',
	            strokeWidth: 10,
	            rotation: 20,
	            data : {'lol': "priut", 'prof' : 'constant'}
	    	});
        }

        element.on('mousedown', mouseDown).on('mouseup', mouseUp).on('mousemove', mouseDrag);
      }
    };
  });
