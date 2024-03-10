import { useState } from "react";
const TokenPage = () => {
  {
    /** ------------ Twitter State ------------ */
  }
  const [twitterapiKey, setTwitterApiKey] = useState("");
  const [twitterapiSecret, setTwitterApiSecret] = useState("");
  const [twitterapiToken, setTwitterAccessToken] = useState("");
  const [twitteraccessSecret, setTwitterAccessSecret] = useState("");
  {
    /** -----------Linked In State ------------------- */
  }
  const [linkedinapiKey, setLinkedinApiKey] = useState("");
  const [linkedinapiSecret, setLinkedinApiSecret] = useState("");
  const [linkedinapiToken, setLinkedinAccessToken] = useState("");
  const [linkedinaccessSecret, setLinkedinAccessSecret] = useState("");

  {
    /** ----------- Medium State  ------------------- */
  }
  const [mediumapiKey, setMediumApiKey] = useState("");
  const [mediumapiSecret, setMediumApiSecret] = useState("");
  const [mediumapiToken, setMediumAccessToken] = useState("");
  const [mediumaccessSecret, setMediumAccessSecret] = useState("");

  {
    /** ----------- Quora  State ------------------- */
  }
  const [quoraapiKey, setQuoraApiKey] = useState("");
  const [quoraapiSecret, setQuoraApiSecret] = useState("");
  const [quoraapiToken, setQuoraAccessToken] = useState("");
  const [quoraaccessSecret, setQuoraAccessSecret] = useState("");

  {
    /** ----------- Hashnode  State------------------- */
  }
  const [hashnodeapiKey, setHashnodeApiKey] = useState("");
  const [hashnodeapiSecret, setHashnodeApiSecret] = useState("");
  const [hashnodeapiToken, setHashnodeAccessToken] = useState("");
  const [hashnodeaccessSecret, setHashnodeAccessSecret] = useState("");

  const handleSaveTokens = async () => {
    try {
      const twitterToken = [
        twitterapiKey,
        twitterapiSecret,
        twitterapiToken,
        twitteraccessSecret,
      ];
      const linkedinToken = [
        linkedinapiKey,
        linkedinapiSecret,
        linkedinapiToken,
        linkedinaccessSecret,
      ];
      const quoraToken = [
        mediumapiKey,
        mediumapiSecret,
        mediumapiToken,
        mediumaccessSecret,
      ];
      const mediumToken = [
        quoraapiKey,
        quoraapiSecret,
        quoraapiToken,
        quoraaccessSecret,
      ];
      const hashnodeToken = [
        hashnodeapiKey,
        hashnodeapiSecret,
        hashnodeapiToken,
        hashnodeaccessSecret,
      ];
      console.log(
        twitterToken,
        linkedinToken,
        quoraToken,
        mediumToken,
        hashnodeToken
      );
      const response = await fetch(
        "https://localhost:3000/todo/api/save-tokens",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            twitterToken,
            linkedinToken,
            quoraToken,
            mediumToken,
            hashnodeToken,
            // Include other tokens here
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to save tokens: ${response.status} - ${response.statusText}`
        );
      }

      console.log("Tokens saved successfully!");
    } catch (error) {
      console.error("Error saving tokens:", error);
    }
  };
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl my-2">Token Settings</h1>
      <h3 className="text-center">
        Secure your account and tailor your experience by configuring your
        unique authentication token below.
      </h3>
      <div className="Twitter-access-token w-3/4 mx-auto my-10 p-7 border-[#E0E3E1] border-2  rounded-xl ">
        <h1 className="text-left text-xl mb-1">Twitter Token</h1>
        <h3 className="text-[#6B6E6D] mb-5 ">
          Make sure that you put always right access token of your Twitter
          Account by keeping this information up to date
        </h3>
        <div className="first m-3  ">
          <label>
            Access Token:
            <input
              type="text"
              value={twitterapiKey}
              onChange={(e) => setTwitterApiKey(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="second m-3">
          <label>
            Access Secret:
            <input
              type="text"
              value={twitterapiSecret}
              onChange={(e) => setTwitterApiSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="third m-3">
          <label>
            API Key:
            <input
              type="text"
              value={twitterapiToken}
              onChange={(e) => setTwitterAccessToken(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="fourth m-3">
          <label className="block mb-2">
            API Secret:
            <input
              type="text"
              value={twitteraccessSecret}
              onChange={(e) => setTwitterAccessSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
      </div>

      {/** -------------------------------- */}

      <div className="LinkedIn-access-token w-3/4 mx-auto my-10 p-7 border-[#E0E3E1] border-2  rounded-xl ">
        <h1 className="text-left text-xl mb-1">LinkedIn Token</h1>
        <h3 className="text-[#6B6E6D] mb-5 ">
          Make sure that you put always right access token of your LinkedIn
          Account by keeping this information up to date
        </h3>
        <div className="first m-3  ">
          <label>
            Access Token:
            <input
              type="text"
              value={linkedinapiKey}
              onChange={(e) => setLinkedinApiKey(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="second m-3">
          <label>
            Access Secret:
            <input
              type="text"
              value={linkedinapiSecret}
              onChange={(e) => setLinkedinApiSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="third m-3">
          <label>
            API Key:
            <input
              type="text"
              value={linkedinapiToken}
              onChange={(e) => setLinkedinAccessToken(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="fourth m-3">
          <label className="block mb-2">
            API Secret:
            <input
              type="text"
              value={linkedinaccessSecret}
              onChange={(e) => setLinkedinAccessSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
      </div>
      {/** -------------MEDIUM------------------ */}

      <div className="LinkedIn-access-token w-3/4 mx-auto my-10 p-7 border-[#E0E3E1] border-2  rounded-xl ">
        <h1 className="text-left text-xl mb-1">Medium Token</h1>
        <h3 className="text-[#6B6E6D] mb-5 ">
          Make sure that you put always right access token of your Medium
          Account by keeping this information up to date
        </h3>
        <div className="first m-3  ">
          <label>
            Access Token:
            <input
              type="text"
              value={mediumapiKey}
              onChange={(e) => setMediumApiKey(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="second m-3">
          <label>
            Access Secret:
            <input
              type="text"
              value={mediumapiSecret}
              onChange={(e) => setMediumApiSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="third m-3">
          <label>
            API Key:
            <input
              type="text"
              value={mediumapiToken}
              onChange={(e) => setMediumAccessToken(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="fourth m-3">
          <label className="block mb-2">
            API Secret:
            <input
              type="text"
              value={mediumaccessSecret}
              onChange={(e) => setMediumAccessSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
      </div>

      {/**  ----------- Quora ----------------- */}

      <div className="LinkedIn-access-token w-3/4 mx-auto my-10 p-7 border-[#E0E3E1] border-2  rounded-xl ">
        <h1 className="text-left text-xl mb-1">Quora Token</h1>
        <h3 className="text-[#6B6E6D] mb-5 ">
          Make sure that you put always right access token of your Quora Account
          by keeping this information up to date
        </h3>
        <div className="first m-3  ">
          <label>
            Access Token:
            <input
              type="text"
              value={quoraapiKey}
              onChange={(e) => setQuoraApiKey(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="second m-3">
          <label>
            Access Secret:
            <input
              type="text"
              value={quoraapiSecret}
              onChange={(e) => setQuoraApiSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="third m-3">
          <label>
            API Key:
            <input
              type="text"
              value={quoraapiToken}
              onChange={(e) => setQuoraAccessToken(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="fourth m-3">
          <label className="block mb-2">
            API Secret:
            <input
              type="text"
              value={quoraaccessSecret}
              onChange={(e) => setQuoraAccessSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
      </div>

      {/**  ------------- HAshnode ------------------------ */}

      <div className="LinkedIn-access-token w-3/4 mx-auto my-10 p-7 border-[#E0E3E1] border-2  rounded-xl ">
        <h1 className="text-left text-xl mb-1">Hashnode Token</h1>
        <h3 className="text-[#6B6E6D] mb-5 ">
          Make sure that you put always right access token of your Hashnode
          Account by keeping this information up to date
        </h3>
        <div className="first m-3  ">
          <label>
            Access Token:
            <input
              type="text"
              value={hashnodeapiKey}
              onChange={(e) => setHashnodeApiKey(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="second m-3">
          <label>
            Access Secret:
            <input
              type="text"
              value={hashnodeapiSecret}
              onChange={(e) => setHashnodeApiSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="third m-3">
          <label>
            API Key:
            <input
              type="text"
              value={hashnodeapiToken}
              onChange={(e) => setHashnodeAccessToken(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
        <hr />
        <div className="fourth m-3">
          <label className="block mb-2">
            API Secret:
            <input
              type="text"
              value={hashnodeaccessSecret}
              onChange={(e) => setHashnodeAccessSecret(e.target.value)}
              className="block w-full border-slate-200 border-2 p-2 mt-1"
            />
          </label>
        </div>
      </div>

      {/* Add more input fields for other platforms */}

      <div className="text-right mx-40">
        <button
          onClick={handleSaveTokens}
          className="bg-blue-700 text-white px-4 py-3 rounded-lg"
        >
          Save Tokens
        </button>
      </div>
    </div>
  );
};
export default TokenPage;
