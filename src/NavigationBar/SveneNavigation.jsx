export default function Root() {
  return (
    <>
      <div id="sidebar" className="pt-5 pl-7 pr-7">
        <nav className="duration-500 ease-in-out font-brico">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h1 className="text-2xl lg:text-3xl text-center md:text-left font-semibold">
              svenefolio
            </h1>
            <div className="w-full fixed bottom-0 text-black bg-white md:static md:bg-transparent md:text-white md:w-auto">
              <ul className="text-sm md:text-base lg:text-lg flex flex-row p-2 gap-8 justify-center">
                <li>
                  <a href={`/contacts/1`}>index</a>
                </li>
                <li>
                  <a href={`/contacts/2`}>output</a>
                </li>
                <li>
                  <a href={`/contacts/2`}>write</a>
                </li>
                <li>
                  <a href={`/contacts/1`}>about</a>
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
