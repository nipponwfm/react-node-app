const $root = document.getElementById("root")

onLoadFunction = async () => {
    $root.innerHTML = '<h1>Loading...</h1>'
    await fetch('/fetch').then(response => response.json().then((data) => {
        if (data.signal) {
            const script = document.createElement("script")
            script.src = 'bundle.js'
            document.body.appendChild(script)
        } else {
            $root.innerHTML = '<h1>Something wrong and i dont know wtf is it</h1>'
        }
    })).catch(() => {console.log('Failed to fetch')})
}

document.addEventListener('load', onLoadFunction())