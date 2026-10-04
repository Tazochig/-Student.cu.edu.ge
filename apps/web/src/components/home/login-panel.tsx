export function LoginPanel() {
  return (
    <main className="login-wrapper">
      <section className="login-panel" aria-label="ავტორიზაცია">
        <a className="university-logo" href="https://student.cu.edu.ge/login" aria-label="კავკასიის უნივერსიტეტი">
          <img src="https://student.cu.edu.ge/images/logo.png" alt="კავკასიის უნივერსიტეტი" />
        </a>
        <a className="language-switch" href="https://student.cu.edu.ge/lang/en" lang="en">EN</a>
        <form onSubmit={(event) => {
          event.preventDefault();
          window.location.assign('/demo');
        }}>
          <input className="user-input" type="text" aria-label="პირადი ნომერი ან CU ელ.ფოსტა" placeholder="პირადი ნომერი ან CU ელ.ფოსტა" autoComplete="username" required />
          <input className="user-input" type="password" aria-label="პაროლი" placeholder=" პაროლი" autoComplete="current-password" required />
          <div className="login-action">
            <button className="login-button" type="submit">ავტორიზაცია</button>
          </div>
          <div className="recovery-row">
            <a href="https://student.cu.edu.ge/forgot-password">პაროლის აღდგენა</a>
          </div>
        </form>
        <p className="alternate-label">ან გაიარეთ ავტორიზაცია</p>
        <div className="google-row">
          <a className="google-button" href="https://student.cu.edu.ge/auth/redirect/google">
            <svg className="google-icon" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M17.6 9.2l-.1-1.8H9v3.4h4.8c-.2 1.2-.8 2.2-1.8 2.8v2.2h3a8.8 8.8 0 0 0 2.6-6.6z" fill="#4285F4" />
              <path d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z" fill="#34A853" />
              <path d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z" fill="#FBBC05" />
              <path d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.8z" fill="#EA4335" />
            </svg>
            Google
          </a>
        </div>
        <div className="demo-link-row">
          <a className="demo-link" href="/demo">დემო სტუდენტის პანელის ნახვა</a>
        </div>
      </section>
    </main>
  );
}
