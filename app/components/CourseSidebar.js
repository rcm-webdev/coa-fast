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
              <span className="relative z-10 text-xl font-bold ">
                Section 1
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-primary/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Lesson 1</li>
              <li className="py-1">Lesson 2</li>
              <li className="py-1">Lesson 3</li>
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
              <span className="relative z-10 text-xl font-bold ">
                Section 2
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-secondary/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Lesson 1</li>
              <li className="py-1">Lesson 2</li>
              <li className="py-1">Lesson 3</li>
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
              <span className="relative z-10 text-xl font-bold ">
                Section 3
              </span>
              <span className="absolute inset-x-0 bottom-1 h-1.5 bg-accent/60 z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </div>
          </div>

          {/* Collapse Content */}
          <div className="collapse-content">
            <ul className="list-disc pl-5">
              <li className="py-1">Lesson 1</li>
              <li className="py-1">Lesson 2</li>
              <li className="py-1">Lesson 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSidebar;
