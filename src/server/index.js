const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
  
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/add', async (req, res) =>
{
    const{url} = req.body
    console.log(url)
    const newURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`
  try {  
      const response = await axios.get(newURL)  
      const {data}= response
            const analyzedData ={          
                    score_tag: data.score_tag,
                    agreement: data.agreement,
                    confidence: data.confidence,
                    subjectivity: data.subjectivity,
                    irony: data.irony,      
            }
        
       res.send({analyzedData})
        }
  catch(error){ console.log(error) }

})

app.listen(8082, (error) => {
    console.log(`Server is listening on port 8082!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

