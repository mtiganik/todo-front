import React from 'react'

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    // remove onClick stuff from this place:
    return (<ul>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  // add this
  handleItemClick(item, event) {
    if (!item.done){
        const {onItemClick} = this.props;
        onItemClick(item,event)
    }
  }
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const TodoApp = (props) => <TodoList
  items={props.items}
  onListClick={() => {}}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default function TodoAppOut(){
    return(
        <TodoApp items={items}/>
    )
} 

// document.body.innerHTML = "<div id='root'></div>";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App items={items}/>);