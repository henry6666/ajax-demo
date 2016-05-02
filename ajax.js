javascript med ajax

Vi ska använda ajaz för att hämta innehåll på en hemsida

vad är Ajax?

Ajax är en teknik, en kombination av saker, för att hämta data från URLs

Asyncronous Javascript and XML

påbörja en hämtning
var request = new XMLHttpRequest(req, res);
request.onreadystatechange = function() {
  console.log("hej där")
  
  // I variabel res (response)  finns de information..
  console.log("Svaret (response) är" + res.responseText);
  
}
request.open('GET', 'http://www.google.com');
request.send();
