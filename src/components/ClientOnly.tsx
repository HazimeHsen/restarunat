"use client";
import { useState, useEffect, ReactNode } from "react";
import PageLoading from "./PageLoading";

const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <PageLoading />;

  return <>{children}</>;
};

export default ClientOnly;
