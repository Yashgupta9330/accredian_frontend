import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPlus } from "react-icons/fa";
import logo2 from "../../assets/logo2.png"
import { accredian, contact, programs } from "../../data/Footer/data";
const Footer:React.FC = () => {

  return(
  <div className="overflow-hidden flex gap-5 self-stretch py-8 pr-5 pl-20 mt-32 w-full bg-zinc-800 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
  <div className="flex flex-col mx-auto pb-10 max-w-[1600px] min-w-[1100px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between text-sm text-white max-md:max-w-full">
          <img
              loading="lazy"
              src={logo2}
              className="shrink-0 self-start w-36 max-w-full aspect-[3.85]"
          />
          <div className="flex flex-col px-16 max-w-sm max-md:px-5">
              <div className="justify-center px-10 py-2 font-medium tracking-wide leading-6 text-center bg-blue-600 rounded-lg border border-white border-solid max-md:px-5">
                  Schedule 1-on-1 Call Now
              </div>
              <div className="self-center leading-[143%]">
                  Speak with our Learning Advisor
              </div>
          </div>
      </div>

      <div className="shrink-0 mt-8 h-px border-t border-solid border-slate-200 max-md:max-w-full" />

      <div className="flex-wrap justify-center pt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full grow self-stretch text-lg font-bold tracking-normal leading-6 text-white max-w-[432px]">
                  <div className="self-start ml-4 text-xl tracking-normal max-md:ml-2.5 font-normal">
                      Programs
                  </div>

                  {/* Program List */}
                  <div className="flex flex-col gap-2 mt-2">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full"
                  >
                    <div className="text-left">{program}</div>
                    <FaPlus size={20} />
                  </div>
                ))}
              </div>
            </div>

              <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch pt-2 max-md:mt-8 max-md:max-w-full">
                      <div className="text-xl tracking-normal leading-8 text-white max-md:max-w-full">
                          Contact Us
                      </div>
                      {contact.map((item,index)=>(
                        <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full" key={index}>
                          {item.text}
                      </div>
                      ))}
                      <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                          Sector 18, Gurugram,
                          <br />
                          Haryana 122015
                      </div>
                      <div className="mt-1 text-lg tracking-normal leading-7 text-white max-md:max-w-full">
                          Why Accredian
                      </div>
                      <div className="mt-1 text-xl font-light tracking-normal leading-8 text-white max-md:max-w-full">
                          Follow Us
                      </div>
                      <div className="flex gap-4 self-start mt-1 text-[#FFFFFF] text-[20px]">
                                    <FaFacebookSquare className="shrink-0 aspect-[0.96] w-[27px]" />
                                    <FaLinkedin className="shrink-0 aspect-[0.96] w-[27px]" />
                                    <FaTwitter className="flex-1 shrink-0 w-full aspect-[0.96]" />
                                    <FaInstagram className="shrink-0 aspect-[0.96] w-[27px]" />
                                    <FaYoutube className="shrink-0 w-7 aspect-square" />
                      </div>
                  </div>
              </div>
              
              <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch pt-2 text-sm tracking-normal leading-5 text-white max-md:mt-8">
                      <div className="text-xl tracking-normal">Accredian</div>
                      {accredian.map((item, index) => (
                      <div className="mt-1" key={index}>{item}</div>
                       ))}
                  </div>
              </div>
          </div>
      </div>
      <div className="self-center mt-10 text-sm tracking-normal leading-5 text-center text-white max-md:max-w-full">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
      </div>
  </div>
  <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb44cf56eda866e5a7e505f9ff93a142ab8a9279941109c1a85b7486f4f8744f?apiKey=c6375cac8ec44817bda5a13b63196755&"
      className="shrink-0 self-end aspect-square mt-[610px] w-[60px] max-md:mt-10"
  />
</div>
);
}

export default Footer;