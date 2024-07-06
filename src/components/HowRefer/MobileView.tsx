import FormDialog from "../common/form/Form";
import Item from "./Item";

const MobileView = () => {
    const info = [
        {
          title: "Submit referrals easily via our website’s referral section.",
          img: (
            <svg
              className="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
          ),
        },
        {
          title: "Earn rewards once your referral joins an Accredian program.",
          img: (
            <svg
              className="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        },
        {
          title: "Both parties receive a bonus 30 days after program enrollment.",
          img: (
            <svg
              className="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
            </svg>
          ),
        },
      ];

  return (
    <div className="block lg:hidden">
      <div className="flex justify-center bg-[#EEF5FF]">
        <div className={`flex flex-col items-center `}>
          <p className="font-semibold text-[27.66px] mt-[23px] mb-[53px]">
            How do I <span className="text-[#1A73E8]">Refer?</span>
          </p>
          <div className="flex flex-col min-[930px]:flex-row gap-8 min-[1360px]:gap-[128px] ">
            {info.map((item, index) => (
              <Item key={index} title={item.title} img={item.img} />
            ))}
          </div>
          <FormDialog  buttonClassName="mt-4 mb-4 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"/>
        </div>
      </div>
    </div>
  );
};


export default MobileView;
