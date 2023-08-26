export default function Root() {
  return (
    <>
      <div id="sidebar" className="pt-10 pl-20 pr-20">
        <nav className="duration-500 ease-in-out font-brico">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h1 className="text-2xl lg:text-3xl text-center md:text-left font-thin">
              svenefolio
            </h1>
            <div className="font-inter uppercase tracking-tight z-50 w-full fixed bottom-0 text-black bg-white md:static md:bg-transparent md:text-white md:w-auto">
              <ul className="font-normal md:font-thin md:text-base lg:text-lg flex flex-row p-2 gap-8 justify-center">
                <li>
                  <a href={`/contacts/1`} className="md:w-24 hover:font-semibold">index</a>
                </li>
                <li>
                  <a href={`/contacts/2`} className="md:w-24 hover:font-semibold">output</a>
                </li>
                <li>
                  <a href={`/contacts/2`} className="md:w-24 hover:font-semibold">write</a>
                </li>
                <li>
                  <a href={`/contacts/1`} className="md:w-24 hover:font-semibold">about</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
