import { useEffect, useState } from "react";
import axios from "axios"
import Sidebar from "../component/Sidebar";
const Dashboard = () => {

  const [reportedData, setReportedData] = useState([]);

  const getAllReports = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/dashboard/weburls"
      );
      const { reports } = response.data;

      setReportedData(reports);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You can handle errors or provide user feedback here.
    }
  };

  const handeldelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete("hhttp://localhost:3001/dashboard/deleteReport", {
        data: { id },
      });
      if (res?.data?.success) {
        setReportedData((prevUserPost) =>
          prevUserPost.filter((post) => post._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllReports();
  }, []);


  return (
<div className="flex pt-12 ">
  <div className="fixed w-80">
    <Sidebar/>
  </div>
      <div className="h-full ml-80 justify-center flex flex-wrap gap-3 w-full">
      {
        reportedData?.map((list)=>(
          <article key={list._id} className="rounded-xl w-[45%] border-2 border-gray-100 bg-white">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            
              <img
                alt="Speaker"
                src="/dark-web.png"
                className="h-14 w-14 rounded-lg object-cover"
              />
            

            <div>
              <h3 className="font-medium sm:text-lg">
                <a href={list.url} className="hover:underline text-blue-700">
                  {" "}
                  {list.url.substring(0, 30)}...
{" "}
                </a>
              </h3>

              <p className="line-clamp-2 text-sm text-gray-700">
                Total no of dark patterns found : {list.count}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <button onClick={()=>{
                    handeldelete(list._id)
                  }} className="text-xs">delete</button>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Reported by
                  <a
                    href="#"
                    className="font-medium underline hover:text-gray-700"
                  >
                    {" "}
                    {list.username}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <strong className={`-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl ${list.active? "bg-green-600" : "bg-orange-300"} px-3 py-1.5 text-white`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <button className="text-[10px] font-medium sm:text-xs">
                {list.active? "Active" : "Pending"}
              </button>
            </strong>
          </div>
        </article>
        ))
      }
        
         
      </div>
    </div>
  );
};

export default Dashboard;
