import BarChartIcon from "@mui/icons-material/BarChart";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GavelIcon from "@mui/icons-material/Gavel";
import AppsIcon from "@mui/icons-material/Apps";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssessmentIcon from "@mui/icons-material/Assessment";
import OpacityIcon from "@mui/icons-material/Opacity";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarBorder from "@mui/icons-material/StarBorder";
const listdata = [
  {
    id: 1,
    primaryText: "Home",
    icon: <HomeIcon />,
    link: "/",
    nestedItems: [],
  },
  {
    id: 2,
    primaryText: "Charts",
    icon: <BarChartIcon />,

    link: "/chart",
    nestedItems: [],
  },
  {
    id: 3,
    primaryText: "Reg Societies",
    icon: <HowToRegIcon />,
    link: "",
    nestedItems: [
      {
        id: 1,
        primaryText: "State-wise List",
        icon: <StarBorder />,
        link: "/list1",
      },
      {
        id: 2,
        primaryText: "All reg. Socities(PDF)",
        icon: <StarBorder />,
        link: "/noLink",
      },
      {
        id: 3,
        primaryText: "Socities Registered before 1986",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      {
        id: 4,
        primaryText: "Calender Year-wise List",
        icon: <StarBorder />,
        link: "/list2",
      },
      {
        id: 5,
        primaryText: "Financial Year-wise List",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 4,
    primaryText: "Forms",
    icon: <InsertDriveFileIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "Form I",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      {
        id: 2,
        primaryText: "Form II",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 5,
    primaryText: "MSCS Act",
    icon: <GavelIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "MSCS Act 2002",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      {
        id: 2,
        primaryText: "MSCS Rule 2002",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 6,
    primaryText: "Application",
    icon: <AppsIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "Received Application",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      {
        id: 2,
        primaryText: "Status of Application",
        icon: <StarBorder />,
        link: "/noLnk",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 7,
    primaryText: "MSCS-MIS",
    icon: <VerifiedUserIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "New User Registration",
        icon: <StarBorder />,
        link: "/",
      },
      {
        id: 2,
        primaryText: "User Login",
        icon: <StarBorder />,
        link: "/",
      },
      {
        id: 2,
        primaryText: "Admin User",
        icon: <StarBorder />,
        link: "/",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 8,
    primaryText: "Reports",
    icon: <AssessmentIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "All Registered Societies",
        icon: <StarBorder />,
        link: "/noLink",
      },
      {
        id: 2,
        primaryText: "Registered Users",
        icon: <StarBorder />,
        link: "/noLink",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 9,
    primaryText: "Liquidation",
    icon: <OpacityIcon />,
    nestedItems: [
      {
        id: 1,
        primaryText: "Socities under liquidation",
        icon: <StarBorder />,
        link: "/noLink",
      },
      {
        id: 2,
        primaryText: "Liquidation process Initiated",
        icon: <StarBorder />,
        link: "/noLink",
      },
      // Add more nested items as needed
    ],
  },
  {
    id: 10,
    primaryText: "Bank",
    icon: <AccountBalanceIcon />,
    link: "/bank",

    nestedItems: [],
  },
  // Add more inputs as needed
];

export { listdata };
