import RouteGuard from "@/components/common/route-guard";

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard allowedRoles={["ADMIN"]}>
      <div className="mt-[100px]">{children}</div>
    </RouteGuard>
  );
}
