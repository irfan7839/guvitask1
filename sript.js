//1.creating instance of xml http
var request=new XMLHttpRequest();
//2.create a connection//open a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true);
//3.send the request
request.send();
//4.load the response this function is triggered only when the data is retrived
request.onload=function(){
    var data=JSON.parse(this.response);
    for(let i=0;i<data.length;i++)
    {
        console.log(data[i].name);
    }
   
}