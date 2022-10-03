import React from 'react';

class FooterLink extends React.Component {
    render() {
        return (
            <>
                <ul className='footer-link'>
                    <li>
                        <a href="#about">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="#customer">
                            customer care
                        </a>
                    </li>
                    <li>
                        <a href="#instagram">
                            instagram
                        </a>
                    </li>
                </ul>
                <span className='copyright'>
                    &copy;
                    pretend store
                </span>
            </>
        );
    }
}

export default FooterLink;