import './app.css'
import Column from './components/column'

export function App() {
  return (
    <div className="App">
      <Column state="PLANNED"/>
      <Column state="ONGOING"/>
      <Column state="DONE" />
    </div>
  )
}
