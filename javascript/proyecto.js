const $ = select => document.querySelector(select);

const $form = $("#form");
const $input = $("#input");
const $submitt = $("#submit");
const $results = $("#results");


const OPTIONS = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const fetchInfo = ip => { 

    return fetch(`http://ip-api.com/json/${ip}`,OPTIONS)
            .then(res=> res.json())
            .catch(error => console.log(error))

}





$form.addEventListener("submit", async (event)=>{
    $submitt.setAttribute("disabled","")
    $submitt.setAttribute("aria-hidden","true")
    $submitt.setAttribute("spinner-border","")
    $submitt.setAttribute("spinner-border-sm","")
    $submitt.setAttribute("visually-hidden","")

    event.preventDefault()

    const {value} = $input ; 
    if(!value) return

    const ipvalue = await fetchInfo(value)
    if(ipvalue) {
        $results.innerHTML = JSON.stringify(ipvalue,null, 4 ) 
        console.log(ipvalue)
        $results.style.display="block"
    }
    
    $submitt.removeAttribute("spinner-border")
    $submitt.removeAttribute("spinner-border-sm")
    $submitt.removeAttribute("disabled")
    $submitt.removeAttribute("aria-hidden")

},{bubbles:false})


