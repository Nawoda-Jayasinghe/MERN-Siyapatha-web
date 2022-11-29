import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import Typography from "./components/Typography";

// Images
import logo from "./assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Siyapatha Youth",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/siyapathayouth/?mibextid=ZbWKwL",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com/siyapatha?igshid=ZmVmZTY5ZGE=",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/siyapatha/mycompany/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@siyapatha8475/videos",
    },
  ],
  menus: [
    {
      name: "Organization",
      items: [
        { name: "about us", href: "" },
        { name: "get membership", href: "" },
        { name: "Leadership Campaign", href: "" },
        { name: "mision", href: "" },
      ],
    },
    {
      name: "Projects",
      items: [
        { name: "Latest", href: "" },
        { name: "Campaigns", href: "" },
        { name: "Upcoming", href: "" },
      ],
    },
    {
      name: "Funds",
      items: [
        { name: "Contact us", href: "" },
        { name: "Sponsor us", href: "" },
        { name: "Donate now", href: "" },
        { name: "Subscribe", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses ", href: "" },
      ],
    },
  ],
  copyright: (
    <Typography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Siyapatha Youth {" "}
      <Typography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Siyapatha Youth
      </Typography>
      .
    </Typography>
  ),
};
