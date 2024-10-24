import RouteGuard from "@/components/common/routeguard";
import SimpleHeader from "@/components/common/simple-header";

export default function ProductDetailLayout({
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
