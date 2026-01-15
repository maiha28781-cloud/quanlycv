import Link from "next/link";
import { BadgeCheck, FileText, LayoutGrid, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "My Tasks", href: "/dashboard/tasks", icon: BadgeCheck },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <div>
        <p className="text-lg font-semibold">Quan Ly CV</p>
        <p className="text-xs text-muted-foreground">Operations console</p>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
