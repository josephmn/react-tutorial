import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Title from './components/Title'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    // TODO: fetch de nuestra super API
    console.log("useEffect is working also when count is changing!!!");
  }, [count]);

  return (
    <>
    {/* <Title/>
    <Title text="texto del componente 2"/>
    <Title text="texto del componente 3"/>

    <Button/>
    <Button onClick={() => alert("Primer boton")}/>
    <Button onClick={() => alert("Segundo boton")} text = "See more"/> */}
    <Button onClick={() => setCount(count+1)} text = "+1"/>
      <Title text={`El numero es: ${count}`}/>
    </>
  )
}

export default App
