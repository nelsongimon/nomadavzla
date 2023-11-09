export default function Container({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-2 lg:mx-4 xl:mx-0">
        {children}
      </div>
    </div>
  );
}
