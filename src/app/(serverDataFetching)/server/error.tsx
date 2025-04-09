"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div >
      <div >Error fetching users data</div>
    </div>
  );
}