import React from 'react';

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '123 Main Street, Anytown, CA 12345',
            phone: '(555) 555-5555',
            email: 'info@google.com',
        };
    }

    render() {
        const { address, phone, email } = this.state;
        return (
            <div>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export default CompanyDetails;
