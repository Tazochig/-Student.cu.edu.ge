import { useState } from "react";
import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  DollarSign,
  FileText,
  GraduationCap,
  Home,
  Info,
  Link,
  Languages,
  LogOut,
  LibraryBig,
  Mail,
  Menu,
  School,
  Search,
  Settings,
  User,
  UserRound,
  Users,
  Zap,
  X,
} from "lucide-react";

const NAV = [
  { id: "home", label: "მთავარი", icon: Home },
  { id: "profile", label: "პროფილი", icon: User },
  {
    id: "semester",
    label: "მიმდინარე სემესტრი",
    icon: CalendarDays,
    caret: true,
  },
  {
    id: "registration",
    label: "რეგისტრაცია",
    icon: ClipboardList,
    caret: true,
  },
  { id: "grades", label: "ნიშნები", icon: BookOpen },
  { id: "finance", label: "ფინანსები", icon: DollarSign, caret: true },
  { id: "requests", label: "განცხადებები და ცნობები", icon: FileText },
  {
    id: "forms",
    label: "გამოკითხვები და ფორმები",
    icon: ClipboardList,
    caret: true,
  },
] as const;

const TABS = [
  { id: "personal", label: "პერსონალური ინფორმაცია", icon: User },
  { id: "higher", label: "უმაღლესი განათლება", icon: GraduationCap },
  { id: "secondary", label: "საშუალო განათლება", icon: School },
  { id: "language", label: "ენის ცოდნა", icon: Languages },
  { id: "cv", label: "CV-ის გენერირება", icon: FileText },
] as const;

const META = [
  { icon: School, label: "ბიზნესის სკოლა" },
  { icon: GraduationCap, label: "საბაკალავრო" },
  {
    icon: BookOpen,
    label:
      "ბიზნესის ადმინისტრირების (სპეციალობები: ფინანსები, მარკეტინგი, მენეჯმენტი, საბუღალტრო აღრიცხვა) საბაკალავრო საგანმანათლებლო პროგრამა",
  },
  { icon: Zap, label: "FI" },
  { icon: UserRound, label: "აქტიური" },
] as const;

export function ProfileDashboard() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("personal");
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? "portal is-menu-open" : "portal"}>
      <button
        type="button"
        className="portal-scrim"
        aria-label="მენიუს დახურვა"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
      <aside className="portal-side" id="portal-menu">
        <div className="portal-brand">
          <img
            src="https://student.cu.edu.ge/images/logo.png"
            alt="კავკასიის უნივერსიტეტი"
          />
          <div className="portal-brand-text">
            <span className="portal-demo-pill">დემო</span>
            <span className="portal-blank portal-blank-name" />
            <span className="portal-blank portal-blank-mail" />
          </div>
        </div>

        <label className="portal-search">
          <Search size={15} strokeWidth={2} aria-hidden="true" />
          <input
            type="search"
            placeholder="ძიება"
            aria-label="ძიება"
            readOnly
          />
          <kbd>K</kbd>
        </label>

        <nav className="portal-nav" aria-label="მენიუ">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = item.id === "profile";
            return (
              <button
                key={item.id}
                type="button"
                className={
                  active ? "portal-nav-item is-active" : "portal-nav-item"
                }
                aria-current={active ? "page" : undefined}
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>{item.label}</span>
                {"caret" in item && item.caret ? (
                  <ChevronDown
                    size={14}
                    className="portal-caret"
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </nav>

        <a className="portal-logout" href="/">
          <LogOut size={16} strokeWidth={1.75} aria-hidden="true" />
          სისტემიდან გასვლა
        </a>
      </aside>

      <div className="portal-main">
        <header className="portal-top">
          <button
            type="button"
            className="portal-burger"
            aria-label={menuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
            aria-expanded={menuOpen}
            aria-controls="portal-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={22} strokeWidth={2.25} />
            ) : (
              <Menu size={22} strokeWidth={2.25} />
            )}
          </button>
          {/* <span className="portal-top-note">
            დემო გვერდი — პირადი მონაცემები ცარიელია და არ ინახება
          </span> */}
          <div className="portal-tools">
            <button type="button" aria-label="ბიბლიოთეკა">
              <LibraryBig size={24} />
            </button>
            <button type="button" aria-label="ფოსტა">
              <Mail size={24} />
            </button>
            <button type="button" aria-label="სასწავლო პლატფორმა">
              <GraduationCap size={24} />
            </button>
            <button type="button" aria-label="ინფორმაცია">
              <Info size={24} />
            </button>
            <button type="button" aria-label="ბმულები">
              <Link size={24} />
            </button>
            <a href="https://student.cu.edu.ge/lang/en" lang="en">
              Eng
            </a>
            <button type="button" aria-label="პარამეტრები">
              <Settings size={24} />
              <ChevronDown size={15} aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className="portal-card" aria-label="სტუდენტის პროფილი">
          <div className="portal-head">
            {/* <span className="portal-mobile-demo">
              დემო — პირადი მონაცემები ცარიელია
            </span> */}
            <img
              className="portal-photo"
              src="/student-photo.png"
              alt="დემო სტუდენტის ფოტო"
            />
            <div className="portal-identity">
              <h1>გიორგი ჩხეიძე</h1>
              <p className="portal-latin">GIORGI CHKHEIDZE</p>
              <ul className="portal-meta">
                {META.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li key={row.label}>
                      <Icon size={14} strokeWidth={1.75} aria-hidden="true" />
                      <span>{row.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="portal-years">
                <ClipboardList size={16} aria-hidden="true" />
                <span>2021–2022</span>
              </p>
            </div>
          </div>

          <div
            className="portal-tabs"
            role="tablist"
            aria-label="პროფილის სექციები"
          >
            {TABS.map((item) => {
              const Icon = item.icon;
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? "is-active" : undefined}
                  onClick={() => {
                    setTab(item.id);
                    setNotice("");
                  }}
                >
                  <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {tab === "personal" ? (
            <form
              className="portal-form"
              onSubmit={(event) => {
                event.preventDefault();
                setNotice("დემო რეჟიმში არაფერი ინახება.");
              }}
            >
              <div className="portal-grid">
                <label>
                  პირადი ნომერი
                  <input readOnly value="01005038386" aria-label="პირადი ნომერი" />
                </label>
                <label>
                  CU ელ. ფოსტა
                  <input readOnly value="g_chkheidze2@cu.edu.ge" aria-label="CU ელ. ფოსტა" />
                </label>
                <label>
                  პირადი ელ. ფოსტა
                  <input readOnly value="" aria-label="პირადი ელ. ფოსტა" />
                </label>
                <label>
                  მობილური
                  <input readOnly value="599377976" aria-label="მობილური" />
                </label>
                <label>
                  მისამართი
                  <textarea readOnly value="ქ.თბილისი, მიხეილ მესხის 52" aria-label="მისამართი" rows={2} />
                </label>
                <label>
                  LINKEDIN
                  <textarea readOnly value="" aria-label="LinkedIn" rows={2} />
                </label>
              </div>
              <div className="portal-form-foot">
                {notice ? (
                  <p className="portal-notice" role="status">
                    {notice}
                  </p>
                ) : (
                  <span />
                )}
                <button type="submit" className="portal-save">
                  შენახვა
                </button>
              </div>
            </form>
          ) : (
            <div className="portal-empty" role="tabpanel">
              <Bell size={18} aria-hidden="true" />
              <p>
                ეს სექცია დემოში ცარიელია. რეალური მონაცემები არ იტვირთება და არ
                ინახება.
              </p>
            </div>
          )}
        </section>

        <footer className="portal-footer">
          © {new Date().getFullYear()} კავკასიის უნივერსიტეტი · ყველა უფლება
          დაცულია
        </footer>
      </div>
    </div>
  );
}
