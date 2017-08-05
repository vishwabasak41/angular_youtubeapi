function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}




$(function(){
	$('form').on('submit',function(p){
		p.preventDefault();

		var request=gapi.client.youtube.search.list({

			'part': 'snippet',
            'q': encodeURIComponent($('#song_value').val().replace('/%20/g','+')),
            'type': 'video',
            'maxResults':20,
            'order':'viewCount'





		});
	

		request.execute(function(response){
			console.log(response)
			var result=response.items;
			console.log("result is"+response.result)
			$.each(response.items,function(index,item){
				$.get("lor.html",function(data){

					for(i=0;i<=5;i++){
					$('#result').append(tplawesome(data, [{"title":response.items["1"].snippet.title,"videoid":response.items["1"].id.videoId}]));
				}

				})
			})
		})




});

})


function init(){
	gapi.client.setApiKey("AIzaSyDDoQP_kbK1xeEnteCOX0C7OFKCF19OdOk");
	gapi.client.load("youtube","v3",function(){

	})
}













