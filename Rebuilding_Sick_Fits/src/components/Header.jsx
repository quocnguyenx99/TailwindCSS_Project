const links = [
  { name: "Products", target: "/" },
  { name: "Sell", target: "/" },
  { name: "Orders", target: "/" },
  { name: "Account", target: "/" },
  { name: "Sign Out", target: "/" },
  { name: "My Cart", target: "/" },
];

function Header() {
  return (
    <header className="mb-8 border-b border-black">
      <div className="pl-6 border-b-10 border-black flex flex-col items-center xl:flex-row xl:items-stretch">
        <h1 className="my-7 bg-sick text-white inline-block p-2 uppercase text-4.5xl transform -skew-x-7 ">
          <a href="/">Sick Fits</a>
        </h1>
        <nav className="my-4 flex flex-wrap flex-1 justify-center xl:my-0 xl:justify-end">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="relative group px-4 text-sm uppercase flex items-center flex-shrink-0 lg:text-lg lg:px-6 xl:px-8 xl:text-xl"
            >
              <span className="absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform -skew-x-20"></span>
              <span className="relative">
                {link.name === "My Cart" ? (
                  <span className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <span className="bg-sick text-white h-8 w-8 rounded-full flex items-center justify-center">
                      1
                    </span>
                  </span>
                ) : (
                  link.name
                )}
                <span className="absolute w-full h-1 bg-sick -bottom-1 left-0 rounded-sm transform scale-x-0 group-hover:scale-x-100 transition ease-bloop duration-400"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>
      <input className="w-full h-16 px-4" type='text' placeholder="Search" />
    </header>
  );
}

export default Header;
