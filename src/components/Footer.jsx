import React from 'react';
import FooterLink from "./FooterLink";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <FooterLink />
                </div>
            </footer>
        );
    }
}

export default Footer;