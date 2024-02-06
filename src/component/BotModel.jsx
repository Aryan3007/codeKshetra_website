import { useState } from "react";
import axios from "axios";
const BotModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  const makeApiRequest = async () => {
    const requestOptions = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/conversationgpt35",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c107a48b3fmsh34c6c0620f1080bp19ac20jsn72f00e5ba0ca",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      data: {
        messages: [
          {
            role: "user",
            content: ques,
          },
        ],
        web_access: false,
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
      },
    };

    try {
      const response = await axios.request(requestOptions);
      setAns(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex justify-center">
      <div className="flex" onClick={() => setIsOpen(true)}>
        <img
          className="h-20 "
          src="https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg"
          alt=""
        />
        <button className="px-6 py-2 mx-auto tracking-wide text-white underline capitalize transition-colors duration-300 transform rounded-md">
          Ask Questions
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block h-[600px] px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="flex items-center justify-center">
                <img className="h-36" src="https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg" alt="" />
              </div>

              <div className="mt-2 text-center">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Ask Question
                </h3>
                <textarea
                  value={ques}
                  onChange={(e) => {
                    setQues(e.target.value);
                  }}
                  name=""
                  id=""
                  cols="40"
                  className="border focus:underline-none rounded-md p-3 border-zinc-300"
                  rows="4"
                ></textarea>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {ans.length === 0 ? (
                    <>
                      <h1>Hello how can i asist you today !!</h1>
                    </>
                  ) : (
                    <>
                      {ans === "" ? (
                        <>
                          <h1>Loading....</h1>
                        </>
                      ) : (
                        <>{ans}</>
                      )}
                    </>
                  )}
                </p>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex fixed bottom-0 mb-4 w-80 flex justify-between sm:items-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      makeApiRequest();
                      setQues("");
                    }}
                    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  >
                    Send Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotModel;
