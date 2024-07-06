  const Item = ({ title, img }: { title: string; img: React.ReactNode }) => {
    return (
      <div className="flex flex-col gap-[26px] justify-center items-center border-red-500 w-[280px] aspect-square rounded-full py-[60px] px-[54px] shadow-[12px_12px_10px_hsla(200,30%,34%,0.3)]"> 
       <div className="bg-white rounded-full shadow-lg p-1">
          {img}
        </div>
        <p className="text-center px-2 font-medium">{title}</p>
      </div>
    );
  };

  export default Item;
  