function Search() 
{
    var elements = document.querySelectorAll(".main");
    let search = document.getElementById('searchtext').value;
    for (var i = 0; i < elements.length; i++)
    {
        if(elements[i].innerHTML.toLowerCase().indexOf(search.toLowerCase()) > - 1)
    {
        alert("found");
    }
    }

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
            alert(elements[i].querySelectorAll('.highlight').length + ' occurences found');
        }
        
    }
}

document.getElementById('searchbutton').addEventListener('click', highlight);