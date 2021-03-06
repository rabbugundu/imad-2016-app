var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'Article one | Raghav Fan of PK',
    heading:'Article one',
    date:'sept 30 , 2016',
    content: `  <p>
                I am Raghavendra pursuing my Btech in ECE in LPU in Punjab . I am Born and brought up in Vijayawada in Andhra Pradesh State.
                This is my first web app i am very thankful to IMAD Team for helping me in making my first webpage 
            </p> 
            
             <img src="http://rightyaleft.com/wp-content/uploads/2011/06/rajnikanth.jpg" />
             
             
            <p> End of My First Web Page </p> `
},
'article-two':{
     title:'Article two | R Raghavendra',
    heading:'Article two',
    date:'sept 30 , 2016',
    content: `  <h>
             This is second article
            </h> `
},
'article-three':{
 title:'Article one | R.Raghavendra',
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

