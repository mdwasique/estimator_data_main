import './layout.scss'
const layout = () => {
  return (
    <div className='layout'>
        <header className='navbar'>NAVBAR</header>
        <div style={{display:'flex'}}>   
            <aside className='sidebar'>SIDEBAR</aside>
            <main className='main'>
                MAINREA
            </main>
        </div>
    </div>
  )
}

export default layout