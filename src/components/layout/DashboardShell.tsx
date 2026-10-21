"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell, CalendarDays, ChevronDown, LayoutDashboard, Menu, Settings2, Users, Video, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SessionContext } from "@/components/layout/SessionProvider";
import { getNotifications } from "@/lib/db";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Calendar", href: "/dashboard/calendar", icon: CalendarDays },
  { label: "Meetings", href: "/dashboard/meetings", icon: Users },
  { label: "Presentations", href: "/dashboard/videos", icon: Video },
  { label: "Activity", href: "/dashboard/activity", icon: Activity },
];

function Brand() {
  return (
    <Link href="/dashboard" className="app-brand" aria-label="Odally overview">
      <svg viewBox="0 0 26 25" role="img" aria-label="Odally">
        <rect x=".5" y=".5" width="25" height="24" rx="7" fill="#38c6ec" />
        <ellipse cx="13" cy="12.5" rx="5.5" ry="6" stroke="white" strokeWidth="2.2" fill="none" />
      </svg>
      <span className="font-bold">Odally</span>
    </Link>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-white" />}><DashboardShellInner>{children}</DashboardShellInner></Suspense>;
}

function DashboardShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/dashboard";
  const { user } = React.useContext(SessionContext);
  const notifications = getNotifications(user?.id || "user_1");
  const unreadNotifications = notifications.filter((notification) => !notification.read).length;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const pageTitle = navItems.find((item) => item.href === pathname || (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`)))?.label
    ?? (pathname.includes("/schedule") ? "Schedule meeting" : pathname.includes("/meetings/") ? "Meeting details" : "Workspace");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setProfileOpen(false);
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);
  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const navigation = (
    <>
      <div className="app-sidebar__label">WORKSPACE</div>
      <div className="app-sidebar__links">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/dashboard" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
          return <Link key={href} href={href} aria-current={active ? "page" : undefined} title={label} className={cn("app-sidebar__link", active && "is-active")}><Icon aria-hidden="true" /><span>{label}</span></Link>;
        })}
      </div>
      <div className="app-sidebar__bottom">
        <Link href="/dashboard/settings" aria-current={pathname.startsWith("/dashboard/settings") ? "page" : undefined} className={cn("app-sidebar__link", pathname.startsWith("/dashboard/settings") && "is-active")} title="Settings"><Settings2 aria-hidden="true" /><span>Settings</span></Link>
      </div>
    </>
  );

  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="Workspace navigation"><Brand />{navigation}</aside>
      <div className="app-main">
        <header className="app-topbar">
          <button type="button" className="app-icon-button app-mobile-toggle" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>{mobileMenuOpen ? <X /> : <Menu />}</button>
          <div className="app-mobile-brand"><Brand /></div>
          <div className="app-topbar__context" aria-live="polite">{pageTitle}</div>
          <div className="app-topbar__actions">
            <div className="app-popover-wrap">
              <button type="button" className="app-icon-button" aria-label={`Notifications${unreadNotifications ? `, ${unreadNotifications} unread` : ""}`} aria-expanded={notificationsOpen} onClick={() => { setNotificationsOpen((open) => !open); setProfileOpen(false); }}><Bell />{unreadNotifications > 0 && <span className="app-notification-dot" aria-hidden="true" />}</button>
              {notificationsOpen && <div className="app-popover app-notification-popover"><div className="app-popover__title">Notifications</div>{notifications.length ? notifications.slice().reverse().map((notification) => <p className="app-popover__item" key={notification.id}><span className={notification.read ? "app-notification-read" : "app-status-dot"} /><span><strong>{notification.title}</strong><br />{notification.message}</span></p>) : <p className="app-popover__item">You&apos;re all caught up.</p>}</div>}
            </div>
            <div className="app-popover-wrap">
              <button type="button" className="app-profile-button" aria-expanded={profileOpen} onClick={() => { setProfileOpen((open) => !open); setNotificationsOpen(false); }}><span className="app-avatar" aria-hidden="true">{user?.name?.trim().charAt(0).toUpperCase() || "M"}</span><span className="app-profile-name">{user?.name || "Account"}</span><ChevronDown aria-hidden="true" /></button>
              {profileOpen && <div className="app-popover app-profile-popover"><div className="app-popover__identity"><strong>{user?.name || "Account"}</strong><span>{user?.email || ""}</span></div><Link href="/dashboard/settings" className="app-popover__link" onClick={() => setProfileOpen(false)}>Account settings</Link><Link href="/dashboard/videos" className="app-popover__link" onClick={() => setProfileOpen(false)}>Presentations</Link></div>}
            </div>
          </div>
        </header>
        {mobileMenuOpen && <button className="app-drawer-backdrop" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} />}
        <aside className={cn("app-mobile-drawer", mobileMenuOpen && "is-open")} aria-label="Mobile workspace navigation" aria-hidden={!mobileMenuOpen}>{navigation}</aside>
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
