import { useNavigate } from "react-router-dom";
const LeftNavbar1 = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className=" md:w-1/5  bg-[#F9F9F9] h-[800px] border-2  rounded-xl my-2 mx-2">
      <div className="heading font-bold text-2xl p-3">Inbox</div>
      <hr />
      <div className="px-5">
        <div className="Feature_1 my-4 ">
          <div className="text-[#434769] font-semibold">AI GEN</div>
          <div className="List text-[#3C455A] ">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1 flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                DashBoard
              </div>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/newNote");
                }}
              >
                New Notes
              </div>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/notes");
                }}
              >
                All Notes
              </div>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/prompt");
                }}
              >
                Prompt Box
              </div>
            </div>
          </div>
        </div>
        <div className="Feature_2 my-4  ">
          <div className="text-[#434769] font-semibold">PROJECT</div>
          <div className="List text-[#3C455A]">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1 flex flex-row">
              <div className="mr-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.394 9.553a1 1 0 0 0-1.817.062l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .894-1.447l-2-4A1 1 0 0 0 13.2 13.4l-.53.706-1.276-2.553ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/imagegen");
                }}
              >
                Image Gen
              </div>
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1 flex flex-row">
              <div className="mr-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  navigate("/videogen");
                }}
              >
                Video Gen
              </div>
            </div>
          </div>
        </div>
        <div className="Feature_3 my-4 ">
          <div className="text-[#434769] font-semibold">PLANNING</div>
          <div className="List text-[#3C455A]">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              Deployments
            </div>
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              GENERATIVE AI
            </div>
          </div>
        </div>
        <div className="setting my-4  ">
          <div className="text-[#434769] font-semibold">SETTING</div>
          <div className="List text-[#3C455A] ">
            <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
              General
            </div>
            <div
              className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/tokens");
              }}
            >
              Token
            </div>
            <div
              className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/setting");
              }}
            >
              Data controls
            </div>
            <div
              className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/history");
              }}
            >
              History
            </div>
          </div>
        </div>
        <hr className="font-bold text-xl" />
        <div className="my-2">
          <div className="font-semibold text-[#434769]">Switch Account</div>
          <div className="font-semibold text-[#434769]" onClick={logout}>
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar1;
