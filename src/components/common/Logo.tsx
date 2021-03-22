import React from 'react';
import Link from "next/link";
import Routes from "../../constants/routes";

const Logo: React.FC = () => {
    return (
        <Link href={Routes.landing}>
            <span style={{
                cursor: 'pointer',
                fontSize: 22,
                fontWeight: 900,
            }}>
                Hour Calendar
            </span>
        </Link>
    )
}


export default Logo