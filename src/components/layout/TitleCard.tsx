const TitleCard = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center gap-5 px-4 w-full h-16 text-lg bg-primary">
      <div className="flex justify-center items-center w-10 h-full">
        <img
          className="w-full h-full"
          src="/car-gauge-logo.svg"
          alt="Company Logo"
        />
      </div>
      <div className="text-center text-white font-semibold">
        <h1 className="heading-lg">Car Ownership Intelligence</h1>
      </div>
      <div className="flex justify-center items-center w-10 h-full"></div>
    </nav>
  );
};

export default TitleCard;
