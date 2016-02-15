getDataJson = function (v) {
	gh = '1Deh98DnopQpGN8DrUPpV7nNN54zfrvz84HzS_DHtBSE', /* spreadsheet key */
	v = (v == null ? '' : 'q=' + v + '&'),/* query search term */
	c = 'alt=json-in-script&callback=getfeed',/* url complement */
	txt = window.location.pathname.split("/").pop(),
	cat= (category == "true" ? 'sq=category=' + txt + '&' : '') ,
	url = 'https://spreadsheets.google.com/feeds/list/' + gh + '/od6/public/values?' + cat + v + c;
	$('title').text('Search Result For : ' + txt.charAt(0).toUpperCase() + txt.slice(1) );
	$.getJSON( url , '') .always(function(d) {
		if (d.readyState == 4 && d.status == 200) {
			eval(d.responseText);
		}
	});
};
getfeed = function(a){
	  fe = a['feed']['entry'];
	  if(!fe) {
	  	$('#classifields').html('No Results Found');
	  } else{
	  	$('#classifields').html('');
	  }
	  for(var i in fe) {
	  	$('<div class="col-md-12 d12c"><h2 class="pull-left h2c"><a target="_blank" href="' + fe[i]['gsx$url']['$t'] + '">' + fe[i]['gsx$name']['$t'] + '</a></h2><p class="h2c">' + fe[i]['gsx$description']['$t'] + '</p></div>').appendTo('#classifields');
	  }
};
$('#search').on("change", function(e) {
	e.preventDefault();
	getDataJson($(this).val());
});
getDataJson(null);
