import React from "react";
import Profile from "../Profile/Profile";
import profilesData from "../../profilesData.json";
import friendList from "../../friendsList.json";
import transactions from "../../transactions.json";

import Statistics from "../Statistics/Statistics";
import statistics from "../../statistics.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile profilesData={profilesData} />
      <Statistics statistics={statistics} title={"Upload stats"} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
