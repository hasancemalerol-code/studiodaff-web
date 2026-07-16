"use client";

import { useEffect, useState } from "react";
import "./Loader.css";

type LoaderProps = {
  children: React.ReactNode;
};

export default function Loader({
  children,
}: LoaderProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-content">

          <div className="paw">
            🐾
          </div>

          <h1>
            Studio<span>Daff</span>
          </h1>

          <p>
            Premium Pet Grooming
          </p>

          <div className="loading-line">
            <span></span>
          </div>

          <small>
            Loading...
          </small>

        </div>
      </div>
    );
  }

  return (
    <>
      {children}
    </>
  );
}