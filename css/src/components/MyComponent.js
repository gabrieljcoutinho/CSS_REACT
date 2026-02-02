import './MyComponent.css';

const MyComponent = () => {
  return (
    <div>
        {/*CSS global*/}
        <h1>CSS de componente</h1>
        <p>Este é o parágrafo do componenete</p>
        <p className="my-com-paragraph">Este tambem é do componente</p>
    </div>
  )
}

export default MyComponent;