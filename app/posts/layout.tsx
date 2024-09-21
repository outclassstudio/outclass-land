import SimpleHeader from "@/components/common/simple-header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHeader text="포스트" url="post" />
      <div className="mt-16">{children}</div>
    </>
  );
}
