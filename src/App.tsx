import './App.css'
// @ts-expect-error this is a remote component (micro-frontends)
import ButtonFromService1 from 'service1/Button'
// @ts-expect-error this is a remote component (micro-frontends)
import ButtonFromService2 from 'service2/Button'

function App() {
  return (
    <div>
      <div className='absolute left-0 right-0 top-0 z-10 flex h-8 items-center justify-between bg-slate-500 px-8 py-1'>
        <div>Acme Corporation</div>
        <div>Account</div>
      </div>
      <ButtonFromService1 />
      <ButtonFromService2 />
    </div>
  )
}

export default App
