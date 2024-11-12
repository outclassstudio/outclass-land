import AdminMenuBox from "@/components/admin/admin-menu-box";
import { ADMIN_MENUS } from "@/lib/contents/menus";

export default function Admin() {
  return (
    <div className="mt-[80px] w-full flex justify-center h-[calc(100vh-200px)]">
      <div className="w-full sm:w-[768px] flex flex-col items-center p-5">
        <div className="w-full flex justify-between items-center text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
          <span>관리자</span>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full">
          {ADMIN_MENUS.map((menu, idx) => (
            <AdminMenuBox key={idx} {...menu} />
          ))}
        </div>
      </div>
    </div>
  );
}
