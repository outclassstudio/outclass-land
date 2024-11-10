import RouteGuard from "@/components/common/route-guard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard allowedRoles={["ADMIN"]}>
      <div className="mt-[80px]">{children}</div>
    </RouteGuard>
  );
}
