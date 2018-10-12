# hero-valley v1.0.0
hero-vally is an utility to create website hero section. The library includes the JavaScript logic related to scroll as well as the minimun CSS styles.

## Installation and customization
Donwload the zip and unzip it. Import the library into your HTML code before the **<body>** closing tag. The library needs a component to be used as hero-section as well as an anchor element to trigger the scroll (move) to a top component. To explain an example we will do it with a Section with ID **#heroSection**, an anchor with ID **#scrollButton** and a top sectio where move to with ID **#topSection**.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Title of document</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <section id="heroSection">
        <h1>Hero Section</h1>
    </section>

    <a id="scrollButton" href="#topSection">
		<span>Go</span>
    </a>

    <section id="topSection">
    </section>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="hero.js"></script>

</body>

</html>
```
To start, we have to point to our anchor component, so we have to set the **COMPONENT_ID** with ours:

```javaScript
const COMPONENT_ID = 'scrollBar';
```

The rest of the logic is the part in charge of scrolling to the top section. The way it works will be explained in "How it works" section

Finally, related to the CSS, the only mandatory part is the following one, in order to make the hero-section as high as the browser visible part.
```css
#heroSection {
	height: 100vh;
}
```
You can customize the rest of the elements, as shown in de demo. From colors to font, margin and others.

## How it works
A scroll event listener has been added to the **anchor** component, so when the user clicks, the event is caught. 

To prevent the URL to be modified and load it, we have added the prevent default statement:

```javaScript
	event.preventDefault();
``` 

The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual.

To scroll to the defined as top section, we're using the **animate** jQuery method as well as it **scrollTop** property.

```javaScript
$('html, body').animate({
	scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
```
Here you have the meaning of this code:

- **.animate()**: The .animate() method allows us to create animation effects on any numeric CSS property. The only required parameter is a plain object of CSS properties. This object is similar to the one that can be sent to the .css() method, except that the range of properties is more restrictive.

- **.scrollTop()**: Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.

The method animates the scroll bar to the href value of the this element (related to click event, i.e. the anchor). The hrf value si the ID of the element to move to.

## Demo
In the following Codepen you can see a working demo

https://codepen.io/rafaF/pen/gBWopZ

## Others
The code has been enclosed into a function in order for it not to clobber the global namespace with tons of variables, which may lead to bugs later on when different code is added.

Also it has been added 'strict mode'. 

ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

## Changelog
First version released.

- v1.0 (2018 Oct 11th)