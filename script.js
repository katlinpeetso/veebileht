/* Kood on pärit lehelt stackowerflow.com (https://stackoverflow.com/questions/49661468/search-a-paragraph),
koodi autori kasutajanimi on dave, kood on üles laetud 04.04.2018. Kood otsib lehelt otsingukasti sisestatud
sõna ning tõstab vastavad sõnad esile. */

function Search() 
{
    var elements = document.querySelectorAll(".main");
    let search = document.getElementById('searchtext').value;
}

document.getElementById('searchbutton').addEventListener('click', Search);
function highlight() 
{
    var text = document.getElementById('searchtext').value;

    if(text)
    {
        let elements = document.querySelectorAll(".main");
        for (var i = 0; i < elements.length; i++)
        {
            if (elements[i].getAttribute('data-originalText')) {
                 elements[i].innerHTML = elements[i].getAttribute('data-originalText');
            } else {
                elements[i].setAttribute('data-originalText', elements[i].innerHTML);
            }
            var main = elements[i].innerHTML;
            var new_text = main.replace(new RegExp('(' + text + ')', 'gi'), '<span class="highlight">$1</span>');
            elements[i].innerHTML = new_text;
        }
        
    }
}

document.getElementById('searchbutton').addEventListener('click', highlight);