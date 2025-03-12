import "./App.css";

function App() {
  return (
    <>
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Nav/Logo Container */}
          <nav className="flex item-center justify-between font-bold text-white">
            {/* Logo */}
            <img src="images/logo.svg" alt="" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* @todo Hamburger Button */}
          </nav>

          {/* @todo Mobile Menu */}

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences that deliver
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}
          <img src="images/desktop/image-interactive.jpg" alt="" />

          {/* text container */}
          <div className="top-48 pr-0 mx-auto bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The Leader in Interactive VR
            </h2>

            <p className="max-w-md text-center mx-auto md:text-left md:mx-0">
              Dounde in 2011, Loopstudioos has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
