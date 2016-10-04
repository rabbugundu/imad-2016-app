var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'Article one | T Venkatesh',
    heading:'Article one',
    date:'sept 30 , 2016',
    content: `  <p>
                I am T Venkatesh pursuing my Btech in ECE in LPU in Punjab . I am Born and brought up in Mahbubnagar in Telangana State.
                This is my first web app i am very thankful to IMAD Team for helping me in making my first webpage 
            </p> 
            <p>
               In this webpage I am going to introduce about one of the best innovative companies in the world ROBERT BOSCH
            </p>
             <img src="http://www.azquotes.com/picture-quotes/quote-i-would-rather-lose-money-than-trust-robert-bosch-73-41-22.jpg" />
             <p>
            In 1886, Robert Bosch founded the Workshop for Precision Mechanics and Electrical Engineering in Stuttgart. This was the birth of todays globally active Robert Bosch GmbH. From the very beginning, the companys history has been characterized by innovative drive and social commitment. We have compiled the highlights from over 130 years in our archives
            </p> 
                <p>
            At Bosch ConnectedWorld 2016, the Bosch Groups CEO Volkmar Denner launched the Bosch IoT Cloud. This is a very significant step in the companys ongoing work to build up an IoT infrastructure. Boschs own cloud underpins the compans overarching connectivity strategy i.e a strategy that aims to design and launch new business models and services in the fields of connected mobility, smart homes.
            </p>
            <p> Key points of BOSCH are : </p>
            <ul>
            <li> Bosch launched its own cloud for IOT services</li>
             <li> Bosch is  leading supplier of automotive components world wide</li>
              <li> Major competitor is Delphi automotive systems</li>
               <li> VISION : INVENTED FOR CONNECTED LIFE </li>
<li> MISSION : WE DEVELOP AND MARKET INNOVATIVE CONNECTED DEVICES AND TAILOR MADE SOLUTIONS FOR IOT</li>
                <li> 
In India, Bosch is a leading supplier of technology and services in the areas of Mobility Solutions , Industrial Technology,
 Consumer Goods</li>
 <li> more than 2 million diesel engines sold by bosch every year </li>
 <li> bosch spend 4 billion euros for research and development every year and we have 15 patents per day </li>
            </ul> 
            <p> End of My First Web Page </p> `
},
'article-two':{
     title:'Article two | T Venkatesh',
    heading:'Article two',
    date:'sept 30 , 2016',
    content: `  <h>
             This is second article
            </h> `
},
'article-three':{
 title:'Article one | T Venkatesh',
    heading:'Article one',
    date:'sept 30 , 2016',
    content: `  <h>
             This is Third article
            </h> `
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
             ${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
           
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
          ${date}
        </div>
        
        <div>
         ${content}
    </div>
</div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res)
{
    var articlename=req.params.articlename;
   res.send(createTemplate(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

