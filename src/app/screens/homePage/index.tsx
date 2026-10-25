import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
// @ts-expect-error CSS is loaded by the bundler; TypeScript has no CSS module declaration.
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepages"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
