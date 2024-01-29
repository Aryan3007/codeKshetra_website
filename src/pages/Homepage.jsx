/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <>
      {/* frontpage */}
      <section className="h-full lg:h-screen backgroun1 w-full flex justify-center items-center">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Unmasking Deception: Illuminate Dark Patterns with Our Cutting-Edge Detection Software
              </h2>

              <p className="mt-4 text-gray-100">
              Dark patterns are design patterns that lead users to act in a certain way that is contrary to their interests, exploiting design power unilaterally in the interests of their creator.
              </p>

              
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Link to="/falseurgency"
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold">Scarcity</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                The Scarcity Pattern induces (truthfully or falsely) the impression that goods or services...
                </p>
              </Link>

              <Link 
              to="/socialproof"
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold">Social Proof</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                Social Proof is another dark pattern of this category. Positive product reviews or activity...
                </p>
              </Link>

              <Link
              to="/baskit"
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold"> Basket Sneaking</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                The Sneak into Basket pattern places an additional, unwanted object in the shopping cart...
                </p>
              </Link>

              <Link
              to="/forced"
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold">Forced Continuity</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                The Forced Continuity pattern automatically renews free or low-cost trial subscriptions...
                </p>
              </Link>

              <Link
              to="/baskit"
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold">Hidden Cost</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                The Hidden Cost pattern reveals additional costs e.g. for certain payment methods, shipping...
                </p>
              </Link>

              <Link
              to='/falseurgency'
                className="block glass rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 text-white font-bold">Countdowns</h2>

                <p className="hidden text-white sm:mt-1 sm:block sm:text-sm ">
                This is illustrated through a running clock or a lapsing bar. You can watch as the desired...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-col items-center my-12">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Previous Analysis
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            The previous analysis provided crucial insights by scrutinizing data trends and patterns. It uncovered valuable correlations and anomalies, laying a foundation for informed decision-making. These findings are pivotal for understanding key aspects and navigating future challenges effectively.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://logowik.com/content/uploads/images/amazon6707.jpg"
                  alt=""
                  className="h-[350px] border-2 border-grey-700 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider flex justify-center items-center py-2 bg-red-400 text-gray-900">
                      {" "}
                     Severity Level : Extreme{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://logowik.com/content/uploads/images/agoda7659.jpg"
                  alt=""
                  className="h-[350px] border-2 border-grey-700 object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider flex justify-center items-center py-2 bg-orange-300 text-gray-900">
                      {" "}
                   Severity Level : Medium{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://logowik.com/content/uploads/images/106_trivago_logo.jpg"
                  alt=""
                  className="h-[350px] w-full  border-2 border-grey-700 object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider py-2 flex justify-center items-center bg-yellow-300 text-gray-900">
                      {" "}
                    Severity Level : Average{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://pluspng.com/img-png/logo-flipkart-png-flipkart-coupons-discount-offers-promo-codes-200.png"
                  alt=""
                  className="h-[350px] w-full border-2 border-grey-700 object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider bg-green-300 py-2 flex justify-center items-center text-gray-900">
                      {" "}
                     Severity level : Low{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Link to='/dashboard'>
        <button className="py-2 px-4 bg-black hover:bg-zinc-800 rounded-lg text-zinc-100">
          Go to Your Dashboard
        </button>
        </Link>
      </section>

      {/* faqs */}
      <div className="space-y-4 w-full lg:p-12 flex flex-col gap-4 justify-center items-center">
        <div>
          <h1 className="text-3xl">FAQs</h1>
        </div>
        <div className="w-2/3 ">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
              Q: What are dark patterns in user experience design?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A: Dark patterns are design choices in user interfaces that intentionally manipulate or deceive users, often to encourage unintended actions, such as making purchases, subscribing to services, or sharing personal information.
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
              Q: How do dark patterns impact user trust?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A: Dark patterns erode user trust by employing deceptive tactics. When users feel manipulated or misled, it can lead to a negative perception of the brand or service, hindering long-term customer relationships
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
              Q: What are common examples of dark patterns?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A: Examples include hidden costs, forced continuity, sneak into basket, confirmshaming, and misdirection. These patterns exploit cognitive biases and user behaviors to drive actions that may not be in the user's best interest.
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
              Q: How can users identify and avoid dark patterns?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A: Users can stay vigilant by carefully reviewing information during the interaction, reading terms and conditions, and being wary of overly persuasive or coercive design elements. Being informed about common dark patterns helps users make more conscious choices online.
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">
              Q: Why are dark patterns considered unethical?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A: Dark patterns prioritize business goals over user well-being, employing manipulative tactics that disregard transparency and user autonomy. This unethical approach can harm the user experience and damage a company's reputation.
            </p>
          </details>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Homepage;
