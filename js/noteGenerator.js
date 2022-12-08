async function generate() {
    const options = {
        method: 'POST',
        headers: {},
        body: {
            prompt: document.getElementById('condition0').value
        }
    };
    
    //const res = await fetch('some url', options)
    //const notes = await res.json()
    const element = document.getElementsByTagName("input");
    const values = [];
    for (var i = 0; i < element.length; i++) {
        values.push(element[i].value);
    }
    const x = values.join(',');
    document.getElementById("notes").value = x;
}

document.addEventListener('DOMContentLoaded', function(e) {
    var generator = document.getElementById('gen');
    // onClick's logic below:
    generator.addEventListener('click', function(e) {
        e.preventDefault()
        generate().then(res => {});
    });
});