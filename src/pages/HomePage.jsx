import AppLayout from "components/layout/AppLayout";
import {
  Activity,
  Contact,
  Hero,
  News,
  Partner,
  Project,
  Recruit,
  Story,
} from "features/Homepage";

import React from "react";

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />
      <Story />
      <Activity />
      <Project />
      <Recruit />
      <News />
      <Partner />
      <Contact />
    </AppLayout>
  );
};

export default HomePage;
