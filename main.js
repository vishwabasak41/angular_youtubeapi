$(function(){
	$('form').on('submit',function(p){
		p.preventDefault();

		var request=gapi.client.youtube.search.list({

			'part': 'snippet',
            'q': 'sonu nigam',
            'type': 'video',
            'maxResults':20,
            'order':'viewCount'





		});

		request.execute(function(response){
			console.log(response)
		})
	})






})





function init(){
	gapi.client.setApiKey("AIzaSyDDoQP_kbK1xeEnteCOX0C7OFKCF19OdOk");
	gapi.client.load("youtube","v3",function(){


//lines




	})
}


























// function start() {
//   // 2. Initialize the JavaScript client library.
//   gapi.client.init({
//     'apiKey': 'YOUR_API_KEY',
//     // clientId and scope are optional if auth is not required.
//     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     return gapi.client.request({
//       'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
//     })
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);


// // var obj=buildApiRequest('GET',
// //                 '/youtube/v3/search',
// //                 {'maxResults': '25',
// //                  'part': 'snippet',
// //                  'q': 'sonu nigam',
// //                  'type': ''});















