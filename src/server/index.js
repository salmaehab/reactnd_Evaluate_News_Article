const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
// const fetch = require('node-fetch')
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
//    async function axiosTest()
//     {
//       const response=  await axios.get(newURL)
      
//       console.log(response.data)
//       return response.data
//     }
//     axiosTest().then(data => {return data})
//     .catch(err => {console.log(err)})
  try {
      //  console.log(response.data)
      const response = await axios.get(newURL)
      //const response = await fetch(newURL)
      
     const {data}= response
     console.log(data)
            const analyzedData ={
                    
                    score_tag: data.score_tag,
                    agreement: data.agreement,
                    confidence: data.confidence,
                    subjectivity: data.subjectivity,
                    irony: data.irony,
                   // polarity: data.sentence_list[0].polarity,
            }
        console.log(analyzedData)
      //  console.log(recievedData)
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

