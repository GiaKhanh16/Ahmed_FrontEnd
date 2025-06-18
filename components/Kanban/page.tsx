import { Plus, Check } from "lucide-react";

const columns = [
  {
    id: "ideas",
    title: "IDEAS",
    count: 1,
    color: "bg-gray-600",
    textColor: "text-gray-100",
    task: {
      title: "Creative ideas for videos",
      tag: "IDEA",
      tagColor: "bg-gray-700 text-gray-200",
    },
    textButton: "New task",
  },
  {
    id: "recording",
    title: "RECORDING",
    count: 1,
    color: "bg-red-700",
    textColor: "text-red-100",
    task: {
      title: "Professionally Recorded",
      tag: "RECORDING",
      tagColor: "bg-red-800 text-red-200",
    },
    textButton: "New video",
  },
  {
    id: "editing",
    title: "EDITING",
    count: 1,
    color: "bg-blue-700",
    textColor: "text-blue-100",
    task: {
      title: "Professionally Edited",
      tag: "EDITING",
      tagColor: "bg-blue-800 text-blue-200",
    },
    textButton: "New edit",
  },
  {
    id: "saved",
    title: "SAVED",
    count: 1,
    color: "bg-amber-700",
    textColor: "text-amber-100",
    task: {
      title: "Content Saved",
      tag: "SAVED IN DRIVE",
      tagColor: "bg-amber-800 text-amber-200",
    },
    textButton: "New video",
  },
  {
    id: "posted",
    title: "POSTED",
    count: 1,
    color: "bg-green-700",
    textColor: "text-green-100",
    task: {
      title: "Professionally Posted",
      tag: "POSTED",
      tagColor: "bg-green-800 text-green-200",
    },
    textButton: "New video",
  },
];

export default function KanbanBoard() {
  return (
    <div className=" bg-black/40 p-2 pb-10 flex  flex-col items gap-5  pl-10">
      <div className="text-center text-md font-light md:text-4xl tracking-tight mb-5 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-200 px-2">
        CONTENT CREATION FOR YOU
      </div>
      <div className="flex gap-6 overflow-x-auto justify-center">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-75">
            <div className="bg-neutral-800/75 rounded-lg p-4 min-h-[150px]">
              <span className="font-mono text-sm py-1 px-2  bg-neutral-700 rounded-xl inline-flex flex-row align-center items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                {column.title}
              </span>
              <div className="bg-neutral-700/50 rounded-lg mt-[10px] pl-2 border border-neutral-700 ">
                <div className="flex items-start gap-3 p-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]">
                    <Check className="w-[10px] h-[10px] text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[14px] font-mono mb-2 tracking-normal">
                      {column.task.title}
                    </h3>
                    <span className="font-mono text-[10px] py-1 px-3  bg-neutral-700 rounded-xl inline-flex flex-row align-center items-center gap-2 ">
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      {column.title}
                    </span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-600 transition-colors mt-4 pl-4">
                <Plus className="w-4 h-4" />
                <span className="text-shadow-md">{column.textButton}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-600 transition-colors mt-4 pl-2 border-[0.2px] border-neutral-700 p-2 w-full rounded-lg py-[7px]">
<Plus className="w-4 h-4" />
<span className="text-shadow-md">New Task</span>
</button>{ */
  /* <div className="flex items-center gap-1">
  <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
  <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
  <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
  <Plus className="w-4 h-4 ml-2 opacity-60" />
</div>; */
}
{
  /* <div className="px-2  rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-2 flex-row">
                  <span className="font-medium text-sm py-2 px-1 bg-neutral-500 rounded-xl flex flex-row align-center items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                    {column.title}
                  </span>
                  <span className="bg-black bg-opacity-20 px-2 py-0.5 rounded text-xs">
                    {column.count}
                  </span>
                </div>
              </div>
              {/* Task Card */
}
{
  /* <div className="bg-gray-700 rounded-lg mt-5 ">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-3">
                      {column.task.title}
                    </h3>
                    <span
                      className={`${column.task.tagColor} px-2 py-1 rounded text-xs font-medium`}
                    >
                      {column.task.tag}
                    </span>
                  </div>
                </div>
              </div> */
}

{
  /* New Task Button */
}
{
}
