function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    console.log(process.env.API_KEY)
    fetch('https://httpbin.org/post', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: "4bde5610d8cb5b0be96377106b7daf34",
            lang: "en",
            verbose: "y",
            txt: "I am happy"


        })
    }).then(res => res.json())
    .then(res => console.log(res));

   
    fetch('https://httpbin.org/post?key=4bde5610d8cb5b0be96377106b7daf34&lang=en&txt=I%20am%20happy', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },

    }).then(res => res.json())
    .then(res => console.log(res));
    
    let baseURL ='https://api.meaningcloud.com/sentiment-2.1?key=';
    
    
    // working fetch, above debugging and visualisation of post requests
    fetch('https://api.meaningcloud.com/sentiment-2.1?key=4bde5610d8cb5b0be96377106b7daf34&lang=en&txt=I%20am%20happy', {
        method: "POST",
        /*body: JSON.stringify({
            key: Client.textapi,
            lang: "en",
            verbose: "y",
            txt: "I am happy"


        })*/
    })
    .then((res) => {
        console.log("Request complete! response:", res.json());
      })

        /*body: JSON.stringify({
            key: Client.textapi,
            lang: "en",
            verbose: "y",
            txt: "I am happy"


        })*/
    }


export { handleSubmit }