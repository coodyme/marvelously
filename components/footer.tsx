export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row justify-center  items-center md:justify-between m-8 text-xs' >
      <div className='flex flex-row items-center my-4 lg:hidden'>
      </div>
      <div>Copyright © {`${new Date().getFullYear()} `} Marvelously. All rights reserved  </div>
      <div className='flex flex-col text-center lg:flex-row gap-2 lg:gap-0 mt-4 lg:mt-0'>
        <a href='https://github.com/augustobritodev/marvelously' target="_blank" rel="noreferrer">Github</a>
      </div>
    </footer>

  )
}

