import money from "../../assets/money.png"
import manwoman from "../../assets/man-woman.png"
import FormDialog from "../common/form/Form";
const Hero : React.FC = () => {
  return(
    <section id="refer" className="w-full flex justify-center items-center mt-12 mb-12">
      <div className="relative w-[75rem] sm:h-[33rem] h-[28rem]  flex sm:mx-10 mx-4 bg-[#EEF5FF] rounded-3xl shadow-xl overflow-hidden">
        <img
          src={money}
          alt="money"
          className="absolute w-auto h-28 rotate-180 -top-10"
        />
        <div className="md:w-2/5 w-full sm:space-y-10 space-y-8 pt-12 sm:pt-20 pl-10">
          <div className="sm:text-[72px] text-[56px] leading-[66px] font-bold">
            <h1 className="">Let&rsquo;s Learn</h1>
            <h1>& Earn</h1>
          </div>
          <div className="text-[30px] leading-[36px]">
            <span>
              Get a chance to win
              <span className="block w-full">
                up-to{" "}
                <span className="text-[#1A73E8] font-bold">Rs. 15,000</span>
              </span>
            </span>
          </div>
          <FormDialog  buttonClassName="w-40 h-12 bg-[#1A73E8] text-white rounded-md sm:mb-4"/>
        </div>
        <div className="relative md:block hidden w-3/5">
          <img
            src={money}
            alt="money"
            className="absolute w-auto h-28 -rotate-90 top-4 left-40 z-0"
          />
          <img
            src={money}
            alt="money"
            className="absolute w-auto h-28  bottom-16 left-10 z-20"
          />
          <img
            src={money}
            alt="money"
            className="absolute lg:block hidden w-auto h-28 -rotate-180 top-48 right-28 z-0"
          />
          <img
            src={manwoman}
            alt="manwoman"
            className="relative w-auto lg:h-full h-5/6 lg:-bottom-6 -bottom-32  z-10"
          />
        </div>
        <img
          src={money}
          alt="money"
          className="absolute w-auto h-28 -rotate-90 right-2 -top-6"
        />
      </div>
    </section>
  );
}

export default Hero;