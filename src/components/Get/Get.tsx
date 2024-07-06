import arrow from "../../assets/arrow.svg"
import circle from "../../assets/circle.svg"
import headphone from "../../assets/headphone.svg"

const Get:React.FC = () => {
  return (
    <div id="support" className="w-full flex items-center justify-center mb-12 mt-12">
    <div className="self-stretch rounded-xl bg-homeaccrediancom-royal-blue box-border flex flex-row items-end justify-between py-[63px] pr-[50px] pl-12 relative w-4/5 gap-[20px] text-9xl text-homeaccrediancom-nero border-[1px] border-solid border-homeaccrediancom-royal-blue mq1300:flex-wrap mq1300:pl-6 mq1300:pr-[25px] mq1300:box-border">
    <img
      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
      alt=""
      src={circle}
    />
    <div className="w-[661.4px] flex flex-row items-start justify-start gap-[32px] max-w-full mq900:flex-wrap mq900:gap-[16px]">
      <img
        className="h-20 w-20 relative rounded-xl z-[1]"
        alt=""
        src={headphone}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[357px] max-w-full mq900:min-w-full">
        <div className="relative leading-[36px] font-semibold inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]">
          Want to delve deeper into the program?
        </div>
        <div className="relative text-base-7 leading-[28px] font-medium text-whitesmoke z-[1]">
          Share your details to receive expert insights from our program
          team!
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 text-center text-lg-8 text-dodgerblue">
      <div className="rounded-lg bg-homeaccrediancom-nero flex flex-row items-start justify-start py-3 px-8 gap-[3.6px] z-[1]">
        <div className="relative leading-[28px] font-semibold inline-block min-w-[111px]">
          Get in touch
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            alt=""
            src={arrow}
          />
        </div>
      </div>
    </div>
   </div>
  </div>
  );
};


export default Get;