
import './App.css'
import { Bubble } from './Bubble'
import test from './test.png'
import image from './image.png'

function App() {

  const testTitle = {content: 'Руководитель отдела продаж'}
  const testDesc = {content: 'Сделка в процессе. Клиент в целом готов купить, но нужно не много времени. Вернётся через 2 недели (10.10.2024г.) - скоро будем делать повторный тест-драйв'}

  return (
    <div>

      <Bubble  title={testTitle} description={testDesc} avatar={{ userName: 'AS', src: test}}/>
      <Bubble  title={testTitle} description={testDesc} avatar={{ userName: 'AS', src: image}}/>
      <Bubble  title={testTitle} description={testDesc} avatar={{ userName: 'AS', src: image}} avatarPositinon='right'/>
      <Bubble  title={testTitle} description={testDesc} avatar={{ userName: 'AS', src: image}} avatarPositinon='right'/>
      <Bubble  title={testTitle} description={testDesc} avatarPositinon='left'/>
      <Bubble  title={testTitle} description={testDesc} avatarPositinon='right'/>
    </div>



  )
}

export default App
