import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  return redirect("/blogs");
};

export default Home;
