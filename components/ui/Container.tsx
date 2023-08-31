export default function Container({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-200 max-w-7xl mx-auto">
      {children}
    </div>
  );
}
