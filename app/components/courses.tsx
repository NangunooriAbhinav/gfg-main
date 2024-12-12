interface CoursesProps {
  title: string;
  cost: number;
  exchange: (updated: number) => void;
}

export default function Courses({ title, cost, exchange }: CoursesProps) {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <p className="mb-2 text-l font-bold tracking-tight text-gray-900">
          {title}
        </p>
      </div>
      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p> */}
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg "
        onClick={() => {
          exchange(cost);
        }}
      >
        Exchange
        <span className="ms-2 flex">
          {cost}
          <img className="w-5" src="/coin.png"></img>
        </span>
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
