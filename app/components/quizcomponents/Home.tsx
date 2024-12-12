import { Quiz } from "@/types";

type HomeProps = {
  quizzes: Quiz[];
  setQuizData: (quiz: Quiz) => void;
  settoggle: (toggle: boolean) => void;
};

const Home = ({ quizzes, setQuizData, settoggle }: HomeProps) => {
  const handleSelectedQuiz = (quiz: Quiz) => {
    setQuizData(quiz);
  };

  return (
    <main className="px-6 text-xl sm:px-16 xl:flex xl:w-full xl:items-start">
      <section className="flex flex-col gap-4 xl:w-1/2">
        <h2 className="flex flex-col text-[40px] leading-tight sm:text-[64px]">
          <span className="font-extralight">Welcome to</span>
          <span className="font-medium">GeeksForGeeks AUSC!</span>
        </h2>
      </section>
      <section className="mt-10 flex flex-col gap-3 sm:gap-6 xl:mt-0 xl:w-1/2 xl:items-end">
        {quizzes.map((quiz) => {
          return (
            <div
              key={quiz.title}
              className="flex h-16 cursor-pointer items-center gap-4 rounded-xl bg-white p-3 drop-shadow-md transition-all duration-200 ease-in-out hover:opacity-75 sm:h-20 sm:gap-8 sm:rounded-3xl xl:h-24 xl:w-[564px] xl:p-5"
              onClick={() => {
                handleSelectedQuiz(quiz);
                settoggle(false);
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14 sm:rounded-xl"
                style={{ backgroundColor: quiz.iconbg }}
              >
                <img
                  src={quiz.icon}
                  alt={quiz.title}
                  className="h-7 w-7 sm:h-10 sm:w-10"
                />
              </div>

              <p className="text-lg font-medium sm:text-[28px]">{quiz.title}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
