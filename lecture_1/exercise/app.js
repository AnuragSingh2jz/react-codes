//                                using js
// let root = document.getElementById("root");
// let element = document.createElement('div')
// element.innerHTML = "hello world"
// root.append(element)
//                                using react
// let root = document.getElementById("root");
// let element = React.createElement('div',{className:'divv'},'hello world')
// let rooot = ReactDOM.createRoot(root)
// rooot.render(element)


    let div = React.createElement('div',{id:'parent'},
        [React.createElement('div',{id:'child'},
            [React.createElement('h1',{},'heading')],
            [React.createElement('h1',{},'heading2')])],
        [React.createElement('div',{id:'child2'},
            [React.createElement('h1',{},'heading')],
            [React.createElement('h1',{},'heading2')]
        )]
    )

    let root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(div)