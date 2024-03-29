import React, { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 1 && <ChartsContainer />}
    </div>
  );
};

export default Stats;
