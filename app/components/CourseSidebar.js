function CourseSidebar() {
  return (
    <div className="w-72 h-screen overflow-y-auto flex flex-col border-r bg-base-300 ">
      {/* Section 1 */}
      <div className="join border-b">
        <div
          tabIndex={0}
          className="collapse collapse-arrow group join-item px-4 py-4 cursor-pointer"
        >
          {/* Collapse Title */}
          <div className="collapse-title flex justify-between items-center">
            <div className="relative inline-block">
              <span className="relative z-10 text-xl font-extrabold ">
                1. The Basics
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-primary/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Charts</li>
              <li className="py-1">Exam</li>
              <li className="py-1">Workflow</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className="join border-b">
        <div
          tabIndex={0}
          className="collapse collapse-arrow group join-item px-4 py-4 cursor-pointer"
        >
          {/* Collapse Title */}
          <div className="collapse-title flex justify-between items-center">
            <div className="relative inline-block">
              <span className="relative z-10 text-xl font-extrabold ">
                2. Optometry
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-secondary/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Routine Visits</li>
              <li className="py-1">Medical Longs</li>
              <li className="py-1">Post ops</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className="join border-b">
        <div
          tabIndex={0}
          className="collapse collapse-arrow group join-item px-4 py-4 cursor-pointer"
        >
          {/* Collapse Title */}
          <div className="collapse-title flex justify-between items-center">
            <div className="relative inline-block">
              <span className="relative z-10 text-xl font-extrabold ">
                3. Ophthalmology
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-accent/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Cornea</li>
              <li className="py-1">Glaucoma</li>
              <li className="py-1">Retina</li>
              <li className="py-1">General</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSidebar;
