"use client";

import { useState } from "react";

function EyeIcon({ off }: { off: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function LoginForm() {
  const [show, setShow] = useState(false);

  return (
    <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
      <div className="auth-field">
        <label className="auth-label" htmlFor="email">
          Email Address
        </label>
        <div className="auth-input-wrap">
          <input
            id="email"
            type="email"
            className="auth-input"
            placeholder="Email Address"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="auth-field">
        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <div className="auth-input-wrap">
          <input
            id="password"
            type={show ? "text" : "password"}
            className="auth-input"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="auth-eye"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            <EyeIcon off={show} />
          </button>
        </div>
      </div>

      <div className="auth-row">
        <label className="auth-check">
          <input type="checkbox" defaultChecked />
          Keep me logged in
        </label>
        <a href="#" className="auth-link">
          Forgot Password?
        </a>
      </div>

      <button type="submit" className="btn btn-gold btn-lg auth-submit">
        Sign In
      </button>

      <button
        type="button"
        className="btn btn-lg auth-google"
        aria-label="Sign in with Google"
      >
        <img src="/assets/icons/google.svg" alt="Google" />
      </button>

      <p className="auth-foot">
        <a href="#" className="auth-link">
          Don&apos;t have an account?
        </a>
      </p>
    </form>
  );
}
