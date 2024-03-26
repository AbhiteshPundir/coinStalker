import { Typography } from "@mui/material"


const Footer = () => <footer className="page-footer font-small blue">
    <div className="bg-fuchsia-950 container-fluid text-center text-md-left py-4 shadow-xl shadow-slate-800">
        <div className="flex-col items-center">
            <Typography className="text-lg text-white">Developed by Abhitesh Pundir</Typography>
            <a className="text-xs text-pink-400" href="https://github.com/AbhiteshPundir/coinStalker">GITHUB</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="text-xs text-pink-400" href="https://www.linkedin.com/in/abhitesh-pundir-934274229/">LINKEDIN</a>
        </div>
    </div>
</footer>

export default Footer