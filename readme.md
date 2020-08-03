# EmreJS
A simple and light JavaScript Framework to manipulate the DOM.


## Installation

EmreJS lives in [npm](https://www.npmjs.com/get-npm). To install the latest stable version, run the following command:

```shell
npm install emrejs
```

With Babel

```
import $ from "emrejs";
```

## Selectors

> Select all elements. @return node list

```$("*")```

> Selects all elements with the given class. @return node list

```$(".class")```

> Selects a element with the given id. @return node list

```$("#id")```

> Selects elements that have the specified attribute with a value exactly equal to a certain value. @return node list

```$("[name='value']")```

> Selects elements that have the specified attribute, with any value. @return node list

```$("[name]")```

## Methods
> Adds the specified class(es) to each element in the set of matched elements. @return void

```$(selector).addClass('newclass')```

> Remove a single class, multiple classes, or all classes from each element in the set of matched elements.  @return void

```$(selector).removeClass('oldclass')```

> Determine whether any of the matched elements are assigned the given class.  @return boolean

```$(selector).hasClass('checkclass')```


> Set the computed style properties for the first element in the set of matched elements.  @return void

```$(selector).css("propertyName","propertyValue")```


> Set the computed style properties for the first element in the set of matched elements.  @return void

```$(selector).css({ propertyName1: propertyValue1, propertyName2: propertyValue2 })```


> Set the computed style properties for the first element in the set of matched elements.  @return void

```$(selector).css({ propertyName1: propertyValue1, propertyName2: propertyValue2 })```


> Show element.  @return void

```$(selector).show()```

> Hide element.  @return void

```$(selector).hide()```

> Remove element from the DOM.  @return void

```$(selector).remove()```

> Check the element exists in the DOM.  @return boolean

```$(selector).exist()```

> Focus element.  @return void

```$(selector).focus()```

> Get attribute.  @return string

```$(selector).attr('src')```

> Set attribute.  @return void

```$(selector).attr('href','https://www.bing.com')```

> Get data.  @return string

```$(selector).data('scroll-trigger')```

> Set data.  @return void

```$(selector).data('scroll-trigger','done')```

> Append to an element.  @return void

```$(selector).append(htmlcodehere)```

> Get value.  @return string

```$(selector).val()```

> Set value.  @return void

```$(selector).val('new value here')```

> on method - click examples;

```
$(".addevent").on("click", (e) => {
  e.preventDefault();
  alert("WOUW2");
});
```
```
$(".h1element").on("click", (e) => {
  let el = $(e.currentTarget);
  el.css("color", "yellow");
  setTimeout(() => el.css("color", "yellow"), 500);
  setTimeout(() => el.css("color", "black"), 1500);
  setTimeout(() => el.css("color", "blue"), 2500);
  setTimeout(() => el.css("color", "green"), 3500);
});
```







### License

EmreJS is [MIT licensed](./LICENSE).