let element = React.createElement("h1", { className: "heading" }, "hello world")
//  ReactDOM.render(element,root); 
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element) // object

//the element is an object in the end no a html tag the render is responsible for h1 tag
console.log(element)

let parent = React.createElement('div', { id: 'parent' },
        React.createElement('div', { id: 'child' },
                [React.createElement('p', { className: 'para1' }, 'paragraph one ')],
                [React.createElement('p', { className: 'para2' }, 'paragraph two ')]
        ),
)
        root.render(parent); 
        
        console.log(parent);
        
        /*
          ## if you want to pass multiple children in an element , you have to pass through an array
        <div id='parent'>
                <div id = 'child'>
                        <p class = 'para1'>
                                paragraph
                        </p>
                </div>
        </div>
        
         */

        // when we try to render anything from js to html tag root the content the content inside the 




