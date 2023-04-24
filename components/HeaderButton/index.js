import Link from 'next/link';
import { classNames } from 'utils';

const HeaderButton = ({ title, url, active }) => {
    return (
        <Link href={url} passHref legacyBehavior>
            <a
                className={classNames(
                    active
                        ? 'border-indigo-500 text-gray-200'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-300',
                    'h-full inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                )}
                aria-current={active ? 'page' : undefined}
            >
                {title}
            </a>
        </Link>
    );
}

export default HeaderButton;