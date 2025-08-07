const TrackTable = () => {
  const months = Array.from({ length: 12 }, (_, i) => ({
    num: i + 1,
  }));

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const returnMonth = (monthNum: number) => {
    switch (monthNum) {
      case 1:
        return "JAN";
      case 2:
        return "FEB";
      case 3:
        return "MAR";
      case 4:
        return "APR";
      case 5:
        return "MAY";
      case 6:
        return "JUN";
      case 7:
        return "JUL";
      case 8:
        return "AUG";
      case 9:
        return "SEP";
      case 10:
        return "OCT";
      case 11:
        return "NOV";
      case 12:
        return "DEC";
    }
  };

  return (
    <div className="absolute top-[20%] right-[5%] bottom-[15%] left-[5%] bg-stone-500 text-gray-600">
      <div className="relative flex h-10 flex-wrap items-center justify-evenly gap-[4%] border-b-2 border-b-gray-600 bg-gray-50 px-3 py-3 pl-20 text-xs font-medium whitespace-nowrap text-white">
        <p className="absolute left-2 pr-10 text-[12px]">MONTH</p>
        {months.map((m, i) => (
          <p key={i} className="font-extrabold text-gray-600">
            {returnMonth(m.num)}
          </p>
        ))}
      </div>
      <div className="relative flex h-[32px] flex-wrap border-b-2 bg-gray-50 pl-45 text-xs font-medium whitespace-nowrap">
        <p className="p absolute left-0 flex h-[32px] w-[14.8%] items-center border-x-2 border-b-2 border-gray-600 bg-gray-50 pr-10 pl-2 text-[12px]">
          HABIT
        </p>
        {days.map((d, i) => (
          <p
            key={i}
            className="flex h-[32px] w-[32px] items-center justify-center border-r-2 border-b-1 border-gray-600"
          >
            X
          </p>
        ))}
        <p className="flex h-[32px] w-[48px] items-center justify-center border-r-2 border-b-2 border-gray-600">
          TOTAL
        </p>
      </div>
      <div className="relative flex h-[32px] flex-wrap bg-gray-50 pl-45 text-xs font-medium whitespace-nowrap text-gray-600">
        <p className="p absolute left-0 flex h-[32px] w-[14.8%] items-center border-x-2 border-b-2 border-gray-600 bg-gray-50 pr-10 pl-2 text-[12px]">
          HABIT
        </p>
        {days.map((d, i) => (
          <p
            key={i}
            className="flex h-[32px] w-[32px] items-center justify-center border-r-2 border-b-2 border-gray-600"
          >
            ✓
          </p>
        ))}
        <p className="flex h-[32px] w-[48px] items-center justify-center overflow-hidden border-r-2 border-b-2 border-gray-600"></p>
      </div>
      <p className="font-gsc font-extrabold text-black">Light</p>
      <p> WEIGHT 900</p>
      <p> whatever</p>
    </div>
  );
};

export default TrackTable;
