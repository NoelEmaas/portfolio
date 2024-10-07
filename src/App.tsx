
function App() {
  return (
    <div className="container px-[15%] mx-auto py-[5%] flex flex-col gap-y-14">

      {/* Header Section */}
      <div>
        <h1> Hello! I am Noel Emaas, </h1> 
        <div className="mt-[20px]">
          <h1 className="text-xl title">
            Software developer
          </h1>
          <p className="subtext">
            I design & build web and mobile apps with the latest tech.
          </p>
        </div>
      </div>

      {/* Works Section */}
      <div>
        <h1 className="title">Selected Works</h1>
        <p className="subtext">Here are some of my projects that I worked on.</p>
      </div>
    </div>
  );
}

export default App
