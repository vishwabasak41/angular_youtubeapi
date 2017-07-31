$.getJSON('http://acadview.getsandbox.com/feedback', function(data) {
	var i=0;
	var first_name=[]
	var feedbacks=[]
	var ratings=[]
for (i=0;i<230;i++)
{
   // console.log(data.result[i].first_name)
   first_name.push(data.result[i].first_name)
   feedbacks.push(data.result[i].feedback_for)
   ratings.push(data.result[i].rating)
   // console.log("First Name is "+first_name)
   // console.log("Feddback is "+feedbacks)
   // console.log("Ratings is "+ratings)
   // console.log("dsjsdhfjs"+typeof(ratings))




}
var finale=[]
finale.push(first_name[0])
var c=0
var j=0
 var leng=ratings.length
 for(i=0;i<leng;i++)
 {
 	console.log(i)
    console.log(finale.length)
for(j=0;j<finale.length;j++)                         //now taking each element and comparing it with all the elements in the above array
 	{

 		 console.log("j value"+j);
 		// if(first_name[j]!==(first_name[i])){
 		// 	if(feedbacks[j]!==feedbacks[i]){
 		// 		if(ratings[j]!==ratings[i]){
 		// 			finale.push(first_name[j])
 		// 			console.log(finale)
 		// 		}
 		// 		else{
 		// 			continue;
 		// 		}
 		// 	}

 		// }
 			
	finale.push(first_name[j])

}
}
 console.log(finale)
 
});