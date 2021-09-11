// const postData = async(url = '', data ={}) =>
//             {   
//                 //specifications
//              const response = await fetch(url, {
//                     "method": "POST",
//                     mode: 'cors',
//                     "credentials": "same-origin",
//                     headers: {"Content-Type": "application/json"},
//                     body:  JSON.stringify(data)
//                     })                     
//                     try{const dataResponse = await response.json()
//                         console.log(dataResponse)
//                         return dataResponse
//                     } 
//                     //in case something went wrong we print the error
//                     catch(error) {console.log(error);}   
//             } 

function handleSubmit(e){
    e.preventDefault();
    let URL = document.getElementById('name').value
   if (Client.is_url(URL))
   {
    console.log("form submitted")
    document.getElementById("agreement").innerHTML = "Please wait, Data is being Fetched"
//   postData("http://localhost:8082/add", {url: URL})
//   .then(res=> {
//       console.log(res)
//       document.getElementById("agreement").innerHTML =`agreement: ${res.analyzedData.agreement}`
//       document.getElementById("confidence").innerHTML =`confidence: ${res.analyzedData.confidence}`
//       document.getElementById("subjectivity").innerHTML =`subjectivity: ${res.analyzedData.subjectivity}`
//       document.getElementById("irony").innerHTML =`irony: ${res.analyzedData.irony}`
//      document.getElementById("scoretag").innerHTML =`scoretag: ${res.analyzedData.scoretag}`

//   })
fetch("http://localhost:8082/add", {
                        "method": "POST",
                        mode: 'cors',
                        "credentials": "same-origin",
                        headers: {"Content-Type": "application/json"},
                        body:  JSON.stringify({url: URL})
                        }).then(res=> res.json())
                        .then(data=>{
                         document.getElementById("agreement").innerHTML =`agreement: ${data.analyzedData.agreement}`
                         document.getElementById("confidence").innerHTML =`confidence: ${data.analyzedData.confidence}`
                         document.getElementById("subjectivity").innerHTML =`subjectivity: ${data.analyzedData.subjectivity}`
                         document.getElementById("irony").innerHTML =`irony: ${data.analyzedData.irony}`
  }) 
                        .catch(error=>console.log(error))
                } 
            }

export{handleSubmit}