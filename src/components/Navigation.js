import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const CATGORY = [
  { label: "当前最热", catName: "hot" },
  { label: "本月最热", catName: "top" },
  { label: "10分钟以上", catName: "long" },
  { label: "本月收藏", catName: "tf" },
  { label: "最近加精", catName: "rf" },
  { label: "上月最热", catName: "top&m=-1" },
  { label: "本月讨论", catName: "md" },
  { label: "最近得分", catName: "rp" },
  { label: "收藏最多", catName: "mf" }
];

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
        >
          {CATGORY.map(({ label, catName }) => (
            <Tab key={catName} label={label} component={Link} to={catName} />
          ))}
        </Tabs>
      </AppBar>
    </>
  );
}
