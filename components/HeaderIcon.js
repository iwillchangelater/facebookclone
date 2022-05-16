function HeaderIcon({ Icon }) {
  return (
    <div
      className="cursore-pointer flex items-center md:px-7 sm:h-14 
    hover:text-blue-400 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 "
    >
      <Icon className="h-5 sm:h-7 mx-auto" />
    </div>
  );
}

export default HeaderIcon;
