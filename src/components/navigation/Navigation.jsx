import React from 'react'

function Navigation() {
  return (
    <div>
     <header className="text-white bg-[#0b0f14f4] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src="https://vignette.wikia.nocookie.net/logopedia/images/b/b6/Todo.png/revision/latest?cb=20190911200430" style={{ height: '20px', width: '20px' }} alt="" />
      <span className="ml-3 text-xl">To-Do-List</span>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navigation
