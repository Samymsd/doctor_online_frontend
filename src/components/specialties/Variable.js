const Variable = ()=>{
  let counter = 0;
  const increase = () => {
    counter = counter + 1;
    console.log(counter);
  }

  return (
    <div>Hola: {counter}
      <button onClick={increase}>Incrementar</button>
    </div>

  )
}

export default Variable;