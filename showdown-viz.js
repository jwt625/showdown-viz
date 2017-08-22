(function(){

	var viz = function(converter) {
		return [
			{
				type: 'output', 
				filter: function(source) {
					console.log("showdown-viz called")
					var elements = $(source);
					// elements = elements.getElementsByTagName('pre');
					// var vizCodeElements = $('code.graphviz-parse');
					// // console.log(source);
					// if (vizCodeElements) {	
					// }
					for (var i = elements.length - 1; i >= 0; i--) {
						var element = elements[i];
						if (element.tagName == "PRE") {
							if (element.firstChild.className == "dot-parse language-dot-parse") {
								var vizData = element.firstChild.firstChild.data;
								var res = Viz(vizData);
								var svg = $(res);
								svg = svg[svg.length-1];
								// $('code.graphviz-parse')[i].replaceWith(svg);
								elements[i] = svg;
							}
						}
					}
					// console.log(elements);
					// return source;
					return $('<div>').append(elements).html();
				}
			}

		];
	};

	// Client-side export
	if (typeof window !== 'undefined' && window.showdown && window.showdown.extension) { window.showdown.extension("showdown-viz",viz); }
	// Server-side export
	if (typeof module !== 'undefined') module.exports = viz;

}());

