import SimpleHeader from "@/components/common/simple-header";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SimpleHeader url="program" text="" />
      <div className="mt-[50px]">{children}</div>
    </div>
  );
}
