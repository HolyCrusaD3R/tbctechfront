const WallOfText = ({
  children,
  title = "",
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <div>
        <p className="font-bold text-xl">{title}</p>
      </div>
      <div className="w-full rounded-xl bg-customGrey p-10">{children}</div>
    </>
  );
};

export default WallOfText;
