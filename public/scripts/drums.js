window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    console.log(e);

});


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    // .target() ~ Get the element that triggered a specific event
    // .classList() ~
}
function playSound(e) {
    /*
        here querySelector() grabs the audio tag with the data-key(see data-* above) equal
        to "${e.keyCode}", were e.keyCode is the 'keydown' events keyCode.
    */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    /*
        if not audio return and do nothing
    */
    if (!audio) return;
    /*
        here classList.add() adds the 'playing' attribute to the key element which has a
        different css style than the plain key element
    */
    key.classList.add('playing');
    /*
        here we set the audio elements playback time to 0 seconds, then play the audio file
        with the play() method.
    */
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
























    /*

    Notes:

    .querySelector(selector)
    Returns the first Element within the document (using depth-first pre-order traversal
    of the document's nodes|by first element in document markup and iterating through
    sequential nodes by order of amount of child nodes) that matches the specified group
    of selectors.

    (``)
    Template literals are enclosed by the back-tick (` `) character instead of double or
    single quotes. Template literals can contain place holders. These are indicated by
    the Dollar sign and curly braces (${expression}). JavaScript will plug the value of
    `expression` into the resulting string.

    data-*
    In HTML5 we now have the ability to embed custom data attributes on all HTML elements.
    These new custom data attributes consist of two parts:
        1. Attribute Name: The data attribute name must be at least one character long and must
        be prefixed with 'data-'. It should not contain any uppercase letters.

        2. Attribute Value: The attribute value can be any string.

    classList
    The Element.classList is a read-only property which returns a live DOMTokenList
    collection of the class attributes of the element.

    classList.add()
    Add specified class values. If these classes already exist in attribute of the element,
    then they are ignored.

    HTMLMediaElement.currentTime
    The HTMLMediaElement.currentTime property gives the current playback time in seconds.
    NOTE: Setting this value seeks the media to the new time.

    HTMLMediaElement.play()
    Begins playback of the media.

    */
