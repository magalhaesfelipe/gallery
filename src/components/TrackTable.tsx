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
    <div className="absolute top-[20%] right-[5%] bottom-[15%] left-[5%] bg-gray-900 text-gray-300">
      <div className="relative flex h-10 flex-wrap items-center justify-evenly gap-[4%] bg-red-600 px-3 py-3 pl-20 text-xs font-medium whitespace-nowrap text-white">
        <p className="absolute left-2 pr-10 text-[12px] text-emerald-400">
          MONTH
        </p>
        {months.map((m, i) => (
          <p key={i}>{returnMonth(m.num)}</p>
        ))}
      </div>
      <div className="relative flex h-10 flex-wrap items-end justify-evenly bg-green-600 px-3 py-3 pl-45 text-xs font-medium whitespace-nowrap text-white">
        <p className="absolute left-2 pr-10 text-[12px] text-emerald-400">
          HABIT
        </p>
        {days.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
};

export default TrackTable;
