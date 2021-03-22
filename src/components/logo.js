import {jsx} from 'theme-ui';
import {Link} from 'components/link';

export default function Logo({isSticky, footer, ...props}) {
    return (
        <Link path="/" sx={styles.logo} {...props}>
            <span style={{cursor: 'pointer'}}>Hour Calendar</span>
        </Link>
    );
}
const styles = {
    logo: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'inline-flex',
        svg: {
            height: 'auto',
            width: [128, null, '100%'],
        },
    },
};
