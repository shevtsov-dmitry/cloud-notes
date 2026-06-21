import AddNote from './components/AddNote'
import NotesList from './components/NotesList'
import SearchNote from './components/SearchNote'
import './index.css'

const App = () => (
  <main className="min-h-screen min-w-screen bg-[#333]">
    <div className="flex w-full justify-around gap-3">
      <AddNote />
      <SearchNote />
    </div>
    <NotesList />
  </main>
)

export default App
